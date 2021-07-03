<template>
  <div>
    <img id="img" src="../assets/simple.jpg" />
    <p id="p1">
      {{ $t('placeholder_text') }}
    </p>
    <div id="div2">
      <footer id="footer">
        <p id="txtfoot">{{ $t('footer') }}</p>
        <ul id="list">
          <li><img src="../assets/facebook (1).png" id="fb" /></li>
          <li><img src="../assets/instagram (1).png" id="insta" /></li>
          <li><img src="../assets/twitter.png" id="twitter" /></li>
        </ul>
      </footer>
    </div>
  </div>
</template>
<style scopped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

#txtfoot {
  position: relative;
  width: auto;
  bottom: 0;
  height: auto;
  padding-left: 1%;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
#list {
  position: relative;
  margin-top: -4%;
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  vertical-align: top;
}
#fb,
#insta,
#twitter {
  width: 64px;
  height: 64px;
  padding: 15%;
}
#div2 {
  position: sticky;
  bottom: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-top: 20%;
  width: 100%;
  height: 10%;
  background: rgb(105, 30, 110);
  background: linear-gradient(180deg, rgba(29, 178, 181, 1) 0%, rgba(172, 37, 213, 1) 50%, rgba(212, 12, 150, 1) 100%);
}
#p1 {
  position: relative;
  margin-left: 30%;
  margin-top: 7%;
  width: auto;
  height: auto;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000;
}
#img {
  position: absolute;
  display: flex;
  width: 250px;
  height: 250px;
  margin-left: 3%;
}
</style>
