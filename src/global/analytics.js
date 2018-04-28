import config from "../../data/SiteConfig";

// Automatic page view tracking
export function trackPageView(pageName) {
  let eventPayload = {};
  eventPayload["page"] = pageName;
  analytics.page("Page Viewed", eventPayload);
}

// Custom track event for use in code
export function track(eventName, eventPayload) {
  if (typeof analytics === "undefined") {
    return;
  }
  if (!eventName) {
    throw new Error(
      "Argument eventName is required when invoking track. Received argument",
      eventName
    );
  }
  if (!eventPayload) {
    eventPayload = {};
  }
  eventPayload["Website Version"] = config.websiteVersion;
  analytics.track(eventName, eventPayload);
}
