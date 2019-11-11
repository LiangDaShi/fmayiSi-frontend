<template>
  <div class="login-child">
    <div class="__tab-container-f">
      <div class="__tab-title-wrap-f">
        <div class="__tab-icon-before" style="display: none;">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="__tab-menus">
          <div class="__tab-tab-f __tab-tab-active-f">
            <span class="__tab-label">验证码登录</span>
          </div>
          <div class="__tab-tab-f">
            <span class="__tab-label">密码登录</span>
          </div>
        </div>
        <div class="__tab-icon-after" style="display: none;">
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="tabs-content">
        <div class="pane">
          <div class="sign-child">
            <div class="_login-header-tc t-c">
              <img
                src="https://timg.mayihr.com/mayisocial_mobile/201910311819/img/logo-circle.a8fd32b8.png"
                alt
              />
            </div>
            <div>
              <div class="__form-item-container">
                <div class="__input-container input-list mb_14">
                  <div class="__input-context">
                    <div>
                      <span class="pre">
                        <i class="iconfont icon-shouji01"></i>
                        <span>+86</span>
                      </span>
                    </div>
                    <figure class="__input-figure">
                      <input
                        type="number"
                        placeholder="手机号"
                        class="__input-text"
                        style="text-align: left;"
                      />
                      <!---->
                    </figure>
                  </div>
                  <div></div>
                </div>
              </div>
              <div class="__form-item-container">
                <div class="__input-container input-list mb_14">
                  <div class="__input-context">
                    <div>
                      <span class="pre">图形验证</span>
                    </div>
                    <figure class="__input-figure">
                      <input
                        type="text"
                        placeholder="图形验证"
                        class="__input-text"
                        style="text-align: left;"
                      />
                      <!---->
                    </figure>
                  </div>
                  <div>
                    <span class="after">
                      <img
                        _ngcontent-c8
                        src="https://gr-api.mayihr.com/user/users/get-vcode?vcode_key=ad022bc3abf453322f204cf8bca9332d"
                        style="width: 1rem; height: 0.36rem;"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class="__form-item-container">
                <div class="__input-container input-list mb_14">
                  <div class="__input-context">
                    <div>
                      <span class="pre">
                        <i class="iconfont icon-yanzhengma"></i>
                      </span>
                    </div>
                    <figure class="__input-figure">
                      <input
                        type="text"
                        placeholder="验证码"
                        class="__input-text"
                        style="text-align: left;"
                      />
                    </figure>
                  </div>
                  <div>
                    <span class="after btn">
                      <span
                        type
                        class="fs_14 __btn-context __btn-primary"
                        style="width: 120px; height: 34px;"
                      >获取验证码</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="sign-btn fs_14">
              <span type class="__btn-context __btn-dis-primary" style="height: 35px;">注册 / 登录</span>
              <p class="sign-http">
                用户注册代表同意
                <router-link to="ura">《用户注册协议》</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>

<style lang="scss" scoped>
._login-header-tc {
  padding: 20px 0;
  width: 100%;
  top: 43px;
}
.__tab-container {
  .__tab-menus {
    display: flex;
    overflow: auto;
    height: 44px;
    align-items: center;
    flex: 1;
  }

  .__tab-title-wrap {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .__tab-tab {
      color: #757575;
      width: 25%;
      text-align: center;
      flex-shrink: 0;
      cursor: pointer;

      span {
        border-bottom: 2px solid #757575;
        padding: 10px;
        height: 44px;
        box-sizing: border-box;
        width: 100%;
        display: inline-block;
      }
    }

    .__tab-icon-after,
    .__tab-icon-before {
      border-bottom: 2px solid #757575;
      color: #757575;
      line-height: 44px;
      height: 44px;
      text-align: center;
      cursor: pointer;
      padding: 0 10px;
    }

    .__tab-icon-after i,
    .__tab-icon-before i {
      font-weight: 700;
    }

    .__tab-tab-active span {
      border-bottom: 2px solid #68c269;
      color: #68c269;
    }

    .__tab-tab02-active span {
      border: 1px solid #68c269;
      border-radius: 6px;
      color: #68c269;
    }
  }
}
.__tab-container-f {
  .__tab-menus {
    height: 42px;
    display: flex;
    justify-content: space-around;

    .__tab-tab-f {
      border-bottom: 2px solid #757575;
    }

    .__tab-tab-f,
    .__tab-tab02-f {
      color: #757575;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }

    .__tab-tab-active-f {
      border-bottom: 2px solid #68c269;
      color: #68c269;
    }

    .__tab-tab02-active-f {
      span {
        color: #68c269;
        padding: 3px 10px;
        border: 1px solid #68c269;
        border-radius: 6px;
      }
    }
  }
}
.sign-child {
  .input-list {
    padding: 0 20px;
    height: 46px;
    background: #fff;

    .iconfont {
      color: #68c269;
    }

    .pre {
      color: #101010;
      display: inline-block;
      width: 1.33333rem;

      span {
        margin-left: 10px;
      }
    }
  }

  .input-list .after.btn span,
  .input-list .after img {
    margin-left: 0.13333rem;
  }

  .sign-btn {
    margin-top: 0.4rem;
    padding: 0 0.26667rem;

    .sign-http {
      margin-top: 0.26667rem;
      color: #999;
    }
  }
}

.__btn-context {
    display: inline-block;
    cursor: pointer;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px
}

.__input-label {
    text-align: justify;
    word-break: break-word;
    white-space: normal;
    word-wrap: normal
}

.__input-container {
    height: 46px;
    justify-content: space-between
}

.__input-container,.__input-context {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.__input-context,.__input-text {
    flex: 1;
    width: 100%;
    line-height: 46px;
    word-break: break-word;
    white-space: normal;
    word-wrap: normal;
    justify-content: flex-start
}

.__input-figure {
    position: relative;
    height: 100%;
    flex: 1
}

.__input-figure __input-text {
    font-size: 16px
}

.__input-figure .__input-text-hint {
    display: block;
    color: #f78f8f;
    font-size: 12px;
    right: 8px;
    bottom: 0;
    position: absolute;
    height: 15px;
    line-height: 15px
}
</style>