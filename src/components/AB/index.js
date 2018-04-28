import React, { Component } from "react"

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      variant: null
    }

    this.experimentId = this.props.id
    this.experimentKey = `experiment_${this.experimentId}`
    this.variantComponents = this.props.children
  }

  nullCache () {
    return {
      get: () => null,
      set: () => null
    }
  }

  cache () {
    if (typeof this.props.cache == 'undefined') {
      return this.nullCache()
    } else {
      return this.props.cache
    }
  }

  chooseRandomVariantId () {
    const randomIndex = Math.floor(Math.random() * (this.variantComponents.length))
    const choosenVariantComponent = this.variantComponents[randomIndex]
    return Promise.resolve(choosenVariantComponent.props.id)
  }

  getVariantId () {
    let variantId = this.cache().get(this.experimentKey)
    if (variantId == null) {
      return (this.chooseRandomVariantId()).then((variantId) => {
        this.props.onEnrolment(this.experimentId, variantId)
        this.cache().set(this.experimentKey, variantId)
        return variantId
      }).catch((err) => {
        const originalVariant = this.variantComponents[0]
        return originalVariant.props.id
      })
    } else {
      this.props.onEnrolment(this.experimentId, variantId)
      return Promise.resolve(variantId)
    }
  }

  componentDidMount () {
    this.getVariantId().then((variantId) => {
      const variant = this.variantComponents.find(variant => variant.props.id == variantId)
      this.setState({
        loading: false,
        variant: variant
      })
    })
  }

  render () {
    return this.state.variant
  }
}

const Variant = (props) => {
  return props.children
}

export {Experiment, Variant}