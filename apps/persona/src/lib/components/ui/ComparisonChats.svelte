<script lang="ts">
  import ChatAgent from "../chats/ChatAgent.svelte";
  import ChatRegular from "../chats/ChatRegular.svelte";
  import Switch from "./Switch.svelte";

  let agentMode = $state(true);
</script>

{@render ChatUi()}

{#snippet ChatUi()}
  <div
    class={`${agentMode ? "border-primary bg-primary/20" : "border-border"} relative border border-t-4 border-b-4`}
  >
    {@render SwitchContainer()}
    <div class="overflow-y-scroll">
      <div
        class="mx-auto flex max-h-[512px] max-w-96 flex-col gap-4 p-4 leading-7"
      >
        {#if agentMode}
          <ChatAgent />
        {:else}
          <ChatRegular />
        {/if}
      </div>
    </div>
  </div>
{/snippet}

{#snippet SwitchContainer()}
  <div class="top-0 left-0 p-4 sm:absolute">
    <Switch bind:checked={agentMode} labelText="「 AGENT MODE 」" />
  </div>
{/snippet}
