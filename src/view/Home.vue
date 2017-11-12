<template>
  <div class="hello">
    <h1>二维码原理解析</h1>
    <h2>我了个擦，搭个环境花两个小时</h2>
    <ul>
      <li><a href="http://www.thonky.com/qr-code-tutorial" target="_blank">qr-code-tutorial</a></li>
      <li><a href="https://github.com/attacking/QRCode" target="_blank">Github</a></li>
    </ul>
    <p>{{msg}}</p>
  </div>
</template>

<script>

  import { QR } from 'util';

  export default {
    name: 'Home',
    data() {
      return {
        msg: QR,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
