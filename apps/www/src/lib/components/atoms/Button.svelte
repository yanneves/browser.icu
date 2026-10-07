<script>
  import { resolve } from "$app/paths";
  import { Button } from "bits-ui";

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children] - The button content.
   * @property {'normal' | 'secondary' | 'destructive' | 'ghost' | 'outline alt' | 'outline' | 'text'} [variant] - The visual style of the button.
   * @property {string} [href] - An optional URL to make the button behave as a link.
   * @property {'normal' | 'sm' | 'text' | 'text md' | 'text sm' | 'sidebar'} [size] - The size and padding of the button.
   * @property {string} [class] - Additional CSS classes.
   * @property {import('svelte/elements').MouseEventHandler<any>} [onclick] - Click event handler.
   * @property {'button' | 'submit' | 'reset'} [type] - The HTML button type.
   * @property {boolean} [disabled] - Whether the button is disabled.
   * @property {Record<string, any>} [restProps] - Any other props to pass to the underlying element.
   */

  /** @type {Props} */
  let {
    children,
    variant = "normal",
    href: button_link = "",
    size = "normal",
    class: style = "",
    onclick,
    type = "button",
    disabled = false,
    ...restProps
  } = $props();

  const isExternal = $derived(
    button_link.startsWith("http") || button_link.startsWith("//"),
  );

  const styles = {
    normal:
      "bg-primary text-primary-foreground active:text-primary-foreground/80 hover:shadow-xl shadow-primary/20",
    destructive:
      "bg-destructive text-primary-foreground active:text-primary-foreground/80 hover:shadow-xl shadow-destructive/20",
    ghost:
      "hover:bg-primary/10 active:bg-primary/20 hover:shadow-xl shadow-primary/5",
    "outline alt":
      "hover:bg-stroke/10 active:bg-stroke/20 inset-ring inset-ring-stroke hover:shadow-xl shadow-stroke/20",
    outline:
      "hover:bg-primary/10 text-primary active:bg-primary hover:shadow-xl shadow-primary/10 inset-ring-[1.45px] inset-ring-primary/20 bg-primary/5 active:text-primary-foreground",
    text: "hover:text-primary",
  };

  const sizes = {
    normal: "px-6 py-3 gap-3 text-sm",
    sm: "px-4 py-2 gap-2 text-xs",
    text: "gap-2",
    "text md": "gap-2 text-sm",
    "text sm": "gap-2 text-xs",
    sidebar: "w-full justify-start px-4 py-2 gap-3 text-sm",
  };

  const linkClass = $derived(
    `focus-visible:outline-primary inline-flex cursor-pointer flex-nowrap items-center justify-center align-middle font-medium outline-offset-4 transition-all focus-visible:outline-2 active:scale-[98%] ${styles[variant]} ${sizes[size]} ${style}`,
  );
</script>

{#if button_link && !disabled}
  {#if isExternal}
    <a
      href={button_link}
      rel="external noopener noreferrer"
      {onclick}
      {...restProps}
      class={linkClass}
    >
      {@render children?.()}
    </a>
  {:else}
    <a href={resolve(button_link)} {onclick} {...restProps} class={linkClass}>
      {@render children?.()}
    </a>
  {/if}
{:else}
  <Button.Root
    {type}
    {disabled}
    {...restProps}
    {onclick}
    class="focus-visible:outline-primary inline-flex cursor-pointer flex-nowrap items-center justify-center align-middle font-medium outline-offset-4 transition-all focus-visible:outline-2 active:scale-[98%] {styles[
      variant
    ]} {sizes[size]} {style} disabled:cursor-not-allowed disabled:opacity-50"
  >
    {@render children?.()}
  </Button.Root>
{/if}
