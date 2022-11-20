<template>
    <div class="content">
      <div class="inner-block">
        <form>
            <h3>Sign In</h3>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
              <button type="submit" class="btn btn-dark btn-lg btn-block signing-button">Sign In</button>

              <p class="forgot-password text-left mt-2 mb-4 mr-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
              </p>
        </form>
      </div>
    </div>
</template>
<script>
    export default {
        setup() {
            return {}
        }
    }
</script>