<template>
  <div class="container">
    <div class="left">
      <div class="main">
        <h2 class="left-title">Tsuyoi - Lenny</h2>
        <br />
        <h3 class="left-desc">- C++ noob dev -</h3>
        <br />
        <p>
          Hello, I'm Lenny and i'm a french noob dev.<br />
          I started programming several years ago, but it was a very bad
          start.<br />
          I have changed a lot over the years (web/gameDev/plugins for
          games/etc...),<br />
          it was very chaotic. A few weeks ago, I decided to focus<br />
          on the lowest level, starting with C++. I think I will test some cool
          personal stuff in C++ like SDL, OpenGL, etc.<br />
          <br />
          Why did I start with C++? It’s simple: I am a fan of Zelda: Ocarina of
          Time, and the game is made in C. I didn’t choose C because I already
          had some bases in C++, and I wanted to have a bit of fun at the
          beginning. Plus, quite a few projects around OOT use C++ in addition
          to C, so it will be useful for me. Later, I plan to test other things
          (some of which I’ve already started looking at),<br />
          like Rust or ASM.<br />
          <br />
          Thank you for reading, and don’t hesitate to look at my projects.<br />
        </p>
        <br />
        <h6>Date : 8 april 2026</h6>
        <h6>Last update : 09 may 2026</h6>
      </div>
      <div class="other">
        <h2>Other things i want to try</h2>
        <br />
        <p>
          I want to try other languages like : <br />- rust <br />- asm <br />-
          C
        </p>
      </div>
    </div>
    <div class="right">
      <div class="inProgress">
        <h2>Projects List (in progress) :</h2>
        <br />
        <h3 class="left-desc">&ThickSpace; - C++ -</h3>
        <br />
        <p>
          <strong
            ><a href="https://github.com/tsuyoi-w/Terraria" target="_blank"
              >&ThickSpace; &ThickSpace; &ThickSpace;- Terraria clone -> solo
              project</a
            ></strong
          >
        </p>
        <br />
        <p>
          <strong>
            <a href="https://github.com/zeldaret/st" target="_blank"
              >&ThickSpace; &ThickSpace; &ThickSpace;- Decomp Zelda ST -> actual
              main project</a
            >
          </strong>
        </p>
      </div>
      <div class="OnlyIdee">
        <h2>Projects List (just an idea) :</h2>
        <br />
        <h3 class="left-desc">&ThickSpace; - C++ -</h3>
        <br />
        <p>
          <strong>
            <a href=""
              >&ThickSpace; &ThickSpace; &ThickSpace;- Entity Component System
              -> it look fun</a
            >
          </strong>
        </p>
        <br />
        <p>
          <strong>
            <a href=""
              >&ThickSpace; &ThickSpace; &ThickSpace;- Chip-8 emulator ->
              starting read some blog</a
            >
          </strong>
        </p>
      </div>
      <div class="DoneNow">
        <h2>Projects List (done for now) :</h2>
        <br />
        <h3 class="left-desc">&ThickSpace; - C++ -</h3>
        <br />
        <p>
          <strong
            ><a href="https://github.com/tsuyoi-w/CTime" target="_blank"
              >&ThickSpace; &ThickSpace; &ThickSpace;- CTime -> fast lib for
              fun</a
            ></strong
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 5%;
  box-sizing: border-box;
  justify-content: space-between;
  background: url("/bg.jpg") no-repeat center center;
  background-size: cover;
}

.left,
.right {
  width: 40%;
  box-sizing: border-box;
}

.right {
  display: flex;
  flex-direction: column;
}

.inProgress,
.OnlyIdee,
.DoneNow {
  padding-bottom: 100px;
}

.main {
  padding-bottom: 50px;
}
</style>
