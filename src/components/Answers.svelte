<script lang="ts">
  import type { Answer } from '$lib/type'

  export let prevAnswers: number[]
  export let options: Answer[]
</script>

<ul class="answers">
  {#each options as answer, i}
    <li>
      <a href="/ebti/s{prevAnswers.join('') + i}" class="button answer base-text">{answer.answer}</a
      >
    </li>
  {/each}
</ul>

<style lang="postcss">
  .answers {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.8rem;
  }
</style>
