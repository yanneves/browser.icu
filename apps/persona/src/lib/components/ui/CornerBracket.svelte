<script>
  const { position = "top-left", class: classes } = $props();
</script>

<svg
  class={[
    "absolute",
    position === "top-left" ? "top-2 left-2" : "right-2 bottom-2",
    classes,
  ]}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  ><path
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    d={position === "top-left" ? "M16 4H4v12" : "M8 20h12V8"}
  /></svg
>
