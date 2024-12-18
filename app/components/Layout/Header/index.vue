<template>
  <header class="layout-header">
    <div class="container">
      <!-- Logo Mobile -->
      <SvgLogoMobile class="mobile-logo" />

      <!-- Logo Desktop -->
      <SvgLogoDesktop class="desktop-logo" />

      <!-- Menu Mobile -->
      <button class="mobile-menu-toggle" aria-label="Abrir menu">
        <SvgMenu />
      </button>

      <!-- Menu Desktop -->
      <nav class="desktop-menu">
        <ul class="menu-list">
          <li><a href="/">About us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/servicos">Use Cases</a></li>
          <li><a href="/contato">Pricing</a></li>
          <li><a href="/contato">Blog</a></li>
          <li><a href="/contato">Request a quote</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
