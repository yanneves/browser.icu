/**
 * Track a Fathom event.
 *
 * @param {string} eventName - Descriptive event name shown in the Fathom dashboard.
 * @param {number} [valueInCents] - Optional value in cents (e.g. 100 = $1.00).
 */
export default (eventName, valueInCents) => {
  if (typeof window !== "undefined") {
    if (typeof valueInCents === "number") {
      window.fathom?.trackEvent(eventName, { _value: valueInCents });
    } else {
      window.fathom?.trackEvent(eventName);
    }
  }
};
