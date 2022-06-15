<script lang="ts">
  // import { afterNavigate } from '$app/navigation'
  import { page } from '$app/stores'
  import EbtiResult from '$comp/EbtiResult.svelte'
  import EbtiStep from '$comp/EbtiStep.svelte'
  import type { Eval, Foods, Step } from '$lib/type'

  export let steps: Step[]
  export let evals: Eval[]
  export let foods: Foods

  $: answers = $page.params.answers.split('').map(d => +d)
</script>

{#if answers.length < steps.length}
  <EbtiStep step={steps[answers.length]} prevAnswers={answers} questionCount={steps.length} />
{:else}
  <EbtiResult {evals} {steps} {answers} {foods} />
{/if}
