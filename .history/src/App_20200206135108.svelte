<script>
  // export let name;

  window.onSignIn = googleUser => {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
  };
</script>

<style>
  .wrapper-signin {
    display: inline-flex;
  }
  .bottom-text input {
    width: 10%;
    float: left;
    position: relative;
    margin-left: -7px;
  }
  .bottom-text a {
    float: right;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    opacity: 0.8;
    right: -5px;
  }

  a {
    text-decoration: none;
  }

  .input-area {
    top: 45%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
  }

  .email {
    margin-top: 15px;
    padding: 10px 0;
  }
  .email > input {
    width: 300px;
    outline: none;
  }

  .password > input {
    width: 300px;
    outline: none;
  }

  .password > span {
    color: white;
    position: absolute;
    margin-top: -10px;
    font-size: 16px;
    color: #c4f2fe;
  }

  .email > span {
    color: #fff;
    position: absolute;
    margin-top: -10px;
    font-size: 16px;
    color: #c4f2fe;
  }

  .wrapper-signin {
    /* border: 1px solid#05063A; */
    border-radius: 20px;
    background: #05063a 0% 0% no-repeat padding-box;
    width: 490px;
    height: 466px;
    top: 40%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
  }

  .sign-in {
    position: absolute;
    top: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*
		margin:0;
		padding: 0 20px;
		font-family: 'Quicksand', sans-serif;
		font-size: 3em;
		color:#E2FAFF;
		text-shadow: 0 0 10px #E2FAFF */
    color: rgb(154, 218, 231);
    background-size: 100%;
    padding: 30px;
    font-size: 40px;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    text-transform: uppercase;
  }

  .sign-in::before {
    content: "SIGN IN";
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(2px);
  }

  /* .gradient{
		background: linear-gradient(91.03148764015282deg, rgba(243, 72, 104,1) 3.365234442365667%,rgba(242, 71, 104,1) 3.365234442365667%,rgba(158, 0, 236,1) 100.99544596703102%);
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height:100%;
		mix-blend-mode:soft-light;
}
*/

  .wrapper-textarea {
    border-radius: 15px;
    width: 380px;
    height: 330px;
    top: 52%;
    left: 50%;
    background: #0d0228;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
  }

  .play-now {
    position: absolute;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 200%;
    left: 50%;
    width: 366px;
    height: 70px;
    background: transparent linear-gradient(0deg, #19002A 0%, #4B009F 51%, #1865B2 130%) 0% 0% no-repeat padding-box;
    opacity: 100%;
    border: none;
    border-radius: 10px;
  }

  .play-now > input {
    position: absolute;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
    background-color: #0d0228;
    border: none;
    border-radius: 10px;
    width: 346px;
    height: 50px;
    outline: none;
    color: #fff;
  }

  .bottom-text > span {
    color: white;
  }

  h1 {
    font-family: Segoe UI, Regular;
    font-weight: 400;
    /* margin: 100px auto; */
    text-align: center;
    font-size: 14px;
    color: #EECFEF;
    max-width: 600px;
    position: relative;
  }

  h1:before {
    content: "";
    display: block;
    width: 120px;
    height: 1px;
    background: #eecfef;
    position: absolute;
    left: 0;
    top: 50%;
  }
  h1:after {
    content: "";
    display: block;
    width: 120px;
    height: 1px;
    background: #eecfef;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .g-signin2 {
    /* display: flex;
		justify-content: center;
		align-items: center;
		margin:30px */
    position: absolute;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 54%;
    left: 50%;
    border-radius: 6px 6px;
  }

  .r-me {
    position: relative;
    top: -5px;
    right: 3px;
    opacity: 0.8;
    font-size: 14px;
  }

  .f-pas {
    position: relative;
    bottom: 3px;
    font: Regular 16px/21px Segoe UI;
  }

  /* .abcRioButtonLightBlue {
    color: #757575;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,0,159,1) 35%, rgba(24,101,178,1) 100%);
} */

  @media (max-width: 640px) {
    main {
      max-width: none;
    }
    .wrapper-textarea{
    border-radius: 15px;
    width: 380px;
    height: 330px;
    top: 52%;
    left: 55%;
    background: #0d0228;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
}

.g-signin2{
    position: absolute;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 58%;
    left: 57%;
    border-radius: 6px 6px;
}
  .wrapper-signin{
        padding: 25px;

  }
  .sign-in{
    left:55%
  }
    }
  
</style>

<main>

  <div class="wrapper-signin">
    <span class="sign-in">Sign In</span>
    <span class="gradient" />
    <div class="wrapper-textarea">
      <form method="post" action="/login" class="input-area">
        <div class="email">
          <span>Email</span>
          <br />
          <input name="Email" type="email"  required/>
        </div>
        <div class="password">
          <span>Password</span>
          <br />
          <input name="password" type="password" required />
        </div>
        <div class="play-now">
          <input type="submit" value="PLAY NOW" />
        </div>
        <div class="bottom-text">
          <input type="checkbox" name="remember" checked="checked" />
          <span class="r-me">Remember Me</span>
          <a class="f-pas" href="#">Forgot your password?</a>
        </div>
        <h1>
          <span>OR</span>
        </h1>
        <!-- <a href="/auth/login">Sign In with Google</a> -->
      </form>
      <!-- <div class="bottom-text">
        <input type="checkbox" name="remember" checked="checked" />Remember Me
        <a href="">Forgit Password ?</a>
      </div> -->
      <!-- <label class="container"><span class="text-r">Remember me</span>
				<a href="#"><span class="f-password">Forgot your password</span></a>
				<input type="checkbox" checked="checked">
				<span class="checkmark"></span>
			</label> -->
    </div>

  </div>
  <div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" />
  
</main>

<svelte:head>
  <script src="https://apis.google.com/js/platform.js" async defer>

  </script>
</svelte:head>


