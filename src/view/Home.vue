<template>
  <div class="hello">
    <h1>二维码原理解析</h1>
    <h2>
      <label>
        <input type="text" v-model='str' />
      </label>
      <label>
        <select v-model='errLevel'>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="Q">Q</option>
          <option value="H">H</option>
        </select>
        <button @click="build">生成二维码</button>
      </label>
    </h2>
    <p>{{msg}}</p>
  </div>
</template>

<script>

  import { QR } from 'util';

  export default {
    name: 'Home',
    data() {
      return {
        str: 'HELLO WORLD',
        errLevel: 'Q',
        msg: '',
      };
    },
    methods: {
      build() {
        this.msg = QR(this.str, 'L');
      },
    },
    mounted() {
      this.build();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

label {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
