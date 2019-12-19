<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Mining</h1>
      <p v-if="userDetails" class="mt-2 text-powerchain-gray font-medium">
        <span v-if="userDetails.mining">Your address is currently mining</span>
        <span v-else>Your address is currently not mining</span>
      </p>
      <div v-else class="w-full mt-8 flex justify-center h-12">
        <span class="spinner-in-page"></span>
      </div>
    </div>
    <div v-if="userDetails" class="relative mt-12 flex justify-center">
      <NormalButton class="bg-active" @click.native="startMining" :disabled="startProcessing">
        <span>Start mining</span>
        <span v-if="startProcessing" class="spinner-button w-5 h-5 mr-2"></span>
      </NormalButton>
      <NormalButton class="ml-4 bg-gray-600" @click.native="stopMining" :disabled="stopProcessing">
        <span>Stop mining</span>
        <span v-if="stopProcessing" class="spinner-button w-5 h-5 mr-2"></span>
      </NormalButton>
      <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
        <template slot="headline">MetaMask Error</template>
        <template slot="text">{{ errorMessage }}</template>
      </Tooltip>
    </div>
  </div>
</template>

<script>
  import NormalButton from '../../components/NormalButton'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'

  export default {
  components: { NormalButton, Tooltip },
  mixins: [WithErrorMessage],
  inject: ['ethereum'],
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  data () {
    return {
      userDetails: null,
      startProcessing: false,
      stopProcessing: false
    }
  },
  mounted () {
    this.fetchUserDetails()
  },
  methods: {
    async fetchUserDetails () {
      this.userDetails = await this.ethereum.getUserDetails(this.chain)
    },
    async startMining () {
      this.startProcessing = true;
      try {
        await this.ethereum.startMining(this.chain);
        this.fetchUserDetails()
      } catch (e) {
        this.handleError()
      } finally {
        this.startProcessing = false
      }
    },
    async stopMining () {
      this.stopProcessing = true;
      try {
        await this.ethereum.stopMining(this.chain);
        this.fetchUserDetails()
      } catch (e) {
        this.handleError()
      } finally {
        this.stopProcessing = false
      }
    }
  }
}
</script>
