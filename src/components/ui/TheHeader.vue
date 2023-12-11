<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <details class="dropdown">
          <summary class="btn btn-ghost btn-circle">
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
          </summary>
          <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><router-link to="/books">도서 검색</router-link></li>
            <li><a>관리자</a></li>
          </ul>
        </details>
      </div>
    </div>
    <div class="navbar-center">
      <router-link class="text-xl btn btn-ghost" to="/">사내도서관</router-link>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <details class="dropdown">
          <summary class="btn btn-ghost btn-circle">
            <span class="material-symbols-outlined"> account_circle </span>
          </summary>
          <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>로그인</a></li>
            <li><a>계정 생성</a></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</template>
