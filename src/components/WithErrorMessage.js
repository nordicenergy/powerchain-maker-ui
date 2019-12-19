export default {
  data () {
    return {
      errorMessage: null
    }
  },
  methods: {
    handleError () {
      this.errorMessage = 'Transaction cancelled or MetaMask error occurred.'

      setTimeout(() => {
        this.errorMessage = null
      }, 5000)
    }
  }
}
