<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>관리자</a></li>
          <li><a>도서 검색</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="text-xl btn btn-ghost">사내도서관</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <span class="material-symbols-outlined"> account_circle </span>
        </div>
      </button>
    </div>
  </div>
</template>
