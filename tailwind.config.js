<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Colmar Academy - Version 1</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="m-0 font-sans text-gray-800">
    <!-- Header -->
    <header class="h-16 bg-white">
      <div class="mx-auto flex h-full max-w-screen-xl items-center justify-between px-6">
        <a href="#" class="flex items-center gap-2">
          <img src="./assets/images/ic-logo.svg" alt="Colmar Academy logo" class="h-10 w-10" />
          <span class="text-lg tracking-wide text-gray-600">
            <strong class="font-bold text-gray-900">COLMAR</strong>ACADEMY
          </span>
        </a>

        <nav class="hidden gap-6 text-sm md:flex">
          <a href="#">On campus</a>
          <a href="#">Online</a>
          <a href="#">For companies</a>
          <a href="#">Sign in</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <main>
      <section class="bg-gray-300">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-8 px-6 py-8 md:flex-row md:items-center md:gap-10 md:px-6 md:py-8">
          <div class="md:w-3/5">
            <img
              src="./assets/images/banner.jpg"
              alt="Students studying at a table outdoors"
              class="w-full"
            />
          </div>

          <div class="md:w-2/5">
            <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Learn something new everyday
            </h1>
            <p class="mb-6 text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              class="inline-block bg-gray-800 px-8 py-3 text-center text-white"
            >
              Start here
            </a>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>