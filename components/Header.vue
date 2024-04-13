<template>
  <!-- Header Root -->
  <div>
    <!-- Baclground -->
    <div
      class="h-screen w-full bg-gradient-to-br from-white via-emerald-50 to-white"
    >
      <div class="h-full min-h-[700px] max-h-[1024px] relative z-10">
        <Icon
          name="akar-icons:php-fill"
          class="-z-10 size-14 animate-bounce duration-5000 absolute px-2.5 py-1 top-[19%] left-[5%] md:top-[10%] lg:top-[20%] md:left-[20%]"
          color="#7A86B9"
        />
        <Icon
          name="vscode-icons:file-type-blade"
          class="-z-10 size-14 animate-bounce delay-300 duration-5000 absolute px-2.5 py-1 top-[41%] md:top-[50%] lg:top-[40%] left-[80%] md:left-[63%] lg:left-[50%]"
        />
        <Icon
          name="vscode-icons:file-type-typescript"
          class="-z-10 size-14 animate-bounce delay-100 duration-5000 absolute px-2.5 py-1 bottom-[20%] md:bottom-[33%] lg:bottom-[35%] left-[10%] md:left-[18%] lg:left-[40%]"
        />
        <Icon
          name="vscode-icons:file-type-vue"
          class="-z-10 size-14 animate-bounce delay-700 duration-5000 absolute px-2.5 py-1 top-[10%] md:top-[20%] left-[75%] lg:left-[70%]"
        />
        <Icon
          name="logos:linux-tux"
          class="-z-10 size-14 animate-bounce duration-5000 absolute px-2.5 py-1 bottom-[5%] md:bottom-[8%] lg:bottom-[15%] md:left-[60%] left-[83%]"
        />

        <!-- Content Wrapper -->
        <div
          class="container flex h-full justify-center lg:justify-between items-center flex-col lg:flex-row gap-12 md:gap-16 lg:gap-0"
        >
          <!-- Left Content -->
          <div>
            <h3 class="font-stylish text-3xl md:text-4xl flex">
              <span>Hi, I'm <strong>Ashok.</strong></span>
              <ArtsWavingHand class="size-10 relative -translate-y-1 mx-2" />
            </h3>
            <h3 class="font-stylish text-2xl md:text-3xl ml-10 md:ml-20 mt-4">
              And I'm a <br class="md:hidden" />
              <strong class="ml-10 md:ml-0">Software Engineer</strong>
            </h3>
            <p class="text-lg md:text-xl pt-6 md:py-6 max-w-2xl">
              Passionate Software Engineer with expertise in PHP, Laravel, Vue,
              TypeScript. Dedicated to crafting elegant solutions and
              continuously learning. Let's create something remarkable together!
            </p>

            <!-- Actions -->
            <div class="flex gap-4 py-6 flex-col md:flex-row">
              <Button size="lg" class="uppercase font-stylish" as-child>
                <a href="/attachments/Resume-Of-Ashok.pdf" target="_blank">
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                as-child
                class="text-emerald-600 hover:text-emerald-500"
              >
                <a href="https://wa.me/+8801829853914" target="_blank">
                  <Icon name="fa6-solid:handshake" class="size-5 mr-2" />
                  Let's Talk
                </a>
              </Button>
            </div>

            <!-- Socials -->
            <div
              class="inline-flex gap-4 justify-center md:justify-start w-full items-center"
            >
              <SocialLink href="https://wa.me/+8801829853914">
                <Icon name="fa6-brands:whatsapp" />
              </SocialLink>
              <SocialLink href="https://twitter.com/ashokbaruaakas">
                <Icon name="fa6-brands:x-twitter" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ashokbaruaakas">
                <Icon name="fa6-brands:linkedin-in" />
              </SocialLink>
              <SocialLink
                href="https://discordapp.com/users/611991650868133894"
              >
                <Icon name="fa6-brands:discord" />
              </SocialLink>
              <SocialLink href="https://github.com/ashokbaruaakas">
                <Icon name="fa6-brands:github" />
              </SocialLink>
            </div>
          </div>

          <!-- Right Content -->
          <ArtsTheProgrammer class="w-[240px] md:w-[400px] lg:w-[600px]" />
        </div>
      </div>
    </div>
  </div>
</template>
