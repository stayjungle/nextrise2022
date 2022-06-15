<script lang="ts">
  import mainImg from '$lib/assets/images/ebti_main.png'
  import logo from '$lib/assets/logos/logo-sj.svg'
</script>

<div class="position-wrapper">
  <div class="container">
    <div class="logo-img-container">
      <img src={logo} alt="스테이정글 로고" />
    </div>

    <img src={mainImg} alt="스테이정글 EBTI" class="main-img" />

    <div class="inner-container">
      <div class="logo-container">
        <h1 class="logo">EBTI</h1>
        <p class="logo-desc">Eating Behaivior Type<br />Indicator</p>
      </div>

      <div class="action-container">
        <p class="opening-line base-text">
          일곱 가지 문항을 통해<br />
          당신의 평소 성격과 성향을 테스트하고,<br />
          당신의 라이프스타일에 꼭 맞는<br />
          건강하고 맛있는 음식을 추천받아 보세요!
        </p>
        <a href="/ebti/s" class="button start">Start</a>
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
    padding-bottom: 2rem;
    padding-left: 2.8125rem;
  }

  .logo-img-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1.1875rem;
  }

  .main-img {
    width: 100%;
    max-width: 18rem;
    margin: 0 auto;
  }

  .logo-container {
    margin-bottom: 0.625rem;
    color: var(--text-color-em);
    font-family: questa-grande, serif;
    font-style: italic;
    font-weight: 700;
    line-height: 1.25;

    .logo {
      font-size: calc(var(--fs) * 60);
      letter-spacing: 0.02em;
    }

    .logo-desc {
      font-size: calc(var(--fs) * 18);
      letter-spacing: 0.02em;
    }
  }

  .opening-line {
    margin-bottom: 1.5625rem;
  }
</style>
