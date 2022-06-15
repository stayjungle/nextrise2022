<script lang="ts">
  import EvalA from '$lib/assets/images/eval_a.png'
  import EvalB from '$lib/assets/images/eval_b.png'
  import FoodBeef from '$lib/assets/images/food_beef.png'
  import FoodChicken from '$lib/assets/images/food_chicken.png'
  import FoodSeafood from '$lib/assets/images/food_seafood.png'
  import FoodVeg from '$lib/assets/images/food_veg.png'
  import type { Eval, Food, Foods, Step } from '$lib/type'

  export let evals: Eval[]
  export let steps: Step[]
  export let foods: Foods
  export let answers: number[]

  const foodImages: Record<string, string> = {
    소고기: FoodBeef,
    닭고기: FoodChicken,
    해산물: FoodSeafood,
    채식: FoodVeg,
  }

  $: cols = Object.keys(steps[0].answers[0].points)
  $: init = Object.fromEntries(cols.map(col => [col, 0]))
  $: points = answers
    .map((a, i) => steps[i].answers[a].points)
    .reduce((a, b) => Object.fromEntries(cols.map(col => [col, a[col] + b[col]])), init)

  $: title = [] as string[]
  $: results = {} as Record<string, string>
  $: foodType = ''
  $: food = {} as Food
  $: isEnergizer = true
  $: evals.forEach(e => {
    const text = points[e.point] >= 0 ? e.textPos : e.textNeg
    if (e.section.startsWith('타이틀')) {
      title.push(text)
      if (e.section === '타이틀3') {
        isEnergizer = points[e.point] >= 0
      }
    } else if (['소고기', '닭고기', '해산물', '채식'].includes(e.section) && text) {
      foodType = e.section as string
      food = foods[e.section] as Food
      results['food'] = text
    } else {
      results[e.section] = text
    }
  })
</script>

<div class="position-wrapper">
  <div class="container">
    <img src={isEnergizer ? EvalA : EvalB} alt="EBTI 결과" class="main-img" />

    <div class="inner-wrapper">
      <h1 class="title">{title.join(' ')}</h1>
      <p class="base-text result-desc">{results['계획성']}</p>
      <p class="base-text result-desc">{results['사교성']}</p>
      <p class="base-text result-desc">{results['활동성']}</p>
    </div>

    <div class="food-recomm-container inner-wrapper">
      <div class="food-title">
        <h2 class="food-message">당신에게 추천해요!</h2>
        <div class="eng-name">{food.engName}</div>
        <div class="kor-name">{food.korName}</div>
      </div>
    </div>

    <div class="food-detail-container">
      <div class="food-image-wrapper">
        <img src={foodImages[foodType]} alt="추천음식 {food.korName}" class="food-image" />
      </div>
      <div class="food-info-container">
        <div class="serving-size food-info">
          <span class="info-title">Serving Size</span>
          <span class="info-data">{food.servingSize}g</span>
        </div>
        <div class="food-info">
          <span class="info-title">Calories</span>
          <span class="info-data">{food.calories}kcal</span>
        </div>
      </div>
    </div>

    <div class="inner-wrapper">
      <p class="base-text result-desc">{results['부연1']} {results['부연2']}</p>
      <p class="base-text result-desc shout">바로 {food.korName}!</p>
      <p class="base-text result-desc">{results['food']}</p>
    </div>
  </div>
</div>

<style lang="postcss">
  .position-wrapper {
    display: flex;
    width: 100%;
    min-width: 20rem; /* 320px */
    height: 100%;
    flex-direction: column;
    margin: 0 auto;
  }

  .main-img {
    width: 100%;
    max-width: 23.4375rem;
    margin: 0 auto 2.5rem;
  }

  .inner-wrapper {
    max-width: 40rem; /* 640px */
  }

  .title {
    margin-bottom: 1rem;
    color: var(--text-color-em);
    font-size: 1.375rem;
    font-weight: 700;
    text-align: center;
  }

  .result-desc {
    padding: 0 3rem;
    margin-bottom: 1.5625rem;
  }

  .result-desc:last-child {
    margin-bottom: 3.875rem;
  }

  .result-desc.shout {
    color: var(--text-color-em);
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
  }

  .food-recomm-container {
    padding-left: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 0.5rem;
    color: var(--text-color-em);
    font-weight: 700;
  }

  .food-title {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .food-message {
      font-size: 1.125rem;
    }

    .eng-name {
      font-family: questa-grande, serif;
      font-size: 1.25rem;
      font-style: italic;
    }

    .kor-name {
      font-size: 1.375rem;
    }
  }

  .food-detail-container {
    padding-left: 3rem;
  }

  .food-info-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.5rem;
    color: var(--text-color-em);
    font-weight: 700;
    gap: 1.25rem;

    .serving-size {
      margin-top: 3.5rem;
    }

    .food-info {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      .info-title {
        font-family: questa-grande, serif;
        font-size: 1.25rem;
        font-style: italic;
        white-space: nowrap;
      }

      .info-data {
        font-size: 1.375rem;
      }
    }
  }

  .food-image-wrapper {
    overflow: hidden;
    width: 60vw;
    margin: 1rem 0 1rem 1rem;
    float: right;
    shape-outside: circle(50%);

    img {
      width: 100%;
      transform: translateX(8vw);
    }
  }
</style>
