<script>
  import { Label, Switch, useId } from "bits-ui";

  let {
    id = useId(),
    checked = $bindable(false),
    ref = $bindable(null),
    labelText,
    ...restProps
  } = $props();
</script>

<div class="flex items-center gap-2">
  <Switch.Root
    class="focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-foreground data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-primary peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
    bind:checked
    bind:ref
    {id}
    {...restProps}
  >
    <Switch.Thumb
      class="pointer-events-none block size-[30px] shrink-0 bg-black transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
    />
  </Switch.Root>
  <Label.Root class="text-sm font-medium" for={id}>{labelText}</Label.Root>
</div>
