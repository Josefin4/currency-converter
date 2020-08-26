let app = new Vue({
	el: '#exchange',
	data: {
		data: null,
		exg: "SEK",
		selectedFromCurrency: "SEK",
		selectedToCurrency: "USD",
		inputAmount: "",
		outputAmount: "",

	},
	created() {
		axios
			.get(`https://api.exchangeratesapi.io/latest?base=SEK`)
			.then((response) => (this.data = response.data.rates))

	},


	mounted() {

	},
	methods: {
		async fetchCurrencies(base) {
			const res = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`)
			return res.data.rates;
		},


	},

	watch: {
		exg: async function (newExg, oldExg) {
			if (newExg !== oldExg) {
				this.exg = newExg;
				this.data = await this.fetchCurrencies(this.exg);
			}


		},
	},
})