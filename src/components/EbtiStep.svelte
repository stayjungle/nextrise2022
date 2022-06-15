<script lang="ts">
  import Answers from '$comp/Answers.svelte'
  import Step01 from '$lib/assets/images/step_01.png'
  import Step02 from '$lib/assets/images/step_02.png'
  import Step03 from '$lib/assets/images/step_03.png'
  import Step04 from '$lib/assets/images/step_04.png'
  import Step05 from '$lib/assets/images/step_05.png'
  import Step06 from '$lib/assets/images/step_06.png'
  import Step07 from '$lib/assets/images/step_07.png'
  import type { Step } from '$lib/type'

  export let prevAnswers: number[]
  export let step: Step
  export let questionCount: number

  const images = [Step01, Step02, Step03, Step04, Step05, Step06, Step07]

  $: curStepCount = prevAnswers.length + 1
  $: curStep = curStepCount.toString().padStart(2, '0')
  $: totalStep = questionCount.toString().padStart(2, '0')
  $: curProgress = (curStepCount / questionCount) * 100
</script>

<div class="position-wrapper">
  <div class="container">
    <img src={images[prevAnswers.length]} alt="EBTI STEP {questionCount}" class="main-img" />

    <div class="inner-container">
      <div class="qna-container">
        <div>
          <div class="q-counter-container">
            <span class="q-counter-text">Question</span>
            <span class="q-counter">{curStep}</span>
          </div>
          <h1 class="question base-text">{step.question}</h1>
        </div>

        <Answers options={step.answers} {prevAnswers} />
      </div>

      <div class="step-counter">
        <div class="steps">{curStep}/{totalStep}</div>
        <div class="progress-bar">
          <span class="cur-step" style="width: {curProgress}%" />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .position-wrapper {
    display: flex;
    width: 100%;
    min-width: 20rem; /* 320px */
    max-width: 40rem; /* 640px */
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
  }

  .container {
    display: flex;
    height: 100%;
    max-height: var(--max-height);
    flex-direction: column;
    justify-content: space-between;
  }

  .inner-container {
    padding-right: 3.125rem;
    padding-bottom: 1.5rem;
    padding-left: 3.125rem;
  }

  .main-img {
    width: 100%;
    max-width: 16rem;
    margin: 0 auto;
  }

  .qna-container {
    display: flex;
    min-height: 18rem;
    flex-direction: column;
    justify-content: space-between;
  }

  .q-counter-container {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.3125rem;
    color: var(--text-color-em);
    gap: 0.6875rem;
  }

  .q-counter-text {
    font-family: questa-grande, serif;
    font-size: 1.75rem;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: capitalize;
  }

  .q-counter {
    font-family: aw-conqueror-didot, serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .question {
    white-space: pre-line;
  }

  .step-counter {
    margin-top: 1.75rem;

    .steps {
      display: flex;
      justify-content: center;
      margin-bottom: 0.625rem;
      font-family: aw-conqueror-didot, serif;
      font-size: 1.375rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
  }

  .progress-bar {
    height: 0.5rem;
    background-color: var(--bg-light-gray);
    border-radius: 1.875rem;

    .cur-step {
      display: block;
      height: 100%;
      background-color: var(--bg-gray);
      border-radius: inherit;
    }
  }
</style>
