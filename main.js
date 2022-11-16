// URLs das APIs
const randomStringURL = 'https://www.random.org/strings/?num=1&len=20&digits=on&upperalpha=on&loweralpha=on&format=plain';
const qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?color=fff&bgcolor=2c7dfa&size=320x320&data=';

// Gerar string aleatória
fetch(randomStringURL)
.then(response => response.text())
.then(data => {

	// Gerar QR Code utilizando a string aleatória
	fetch(qrCodeURL + data)
	.then(response => response.blob())
	.then(image => {
		qrCode.src = URL.createObjectURL(image);

		// Esconder ícone de loading e exibir card
		loading.classList.add('hidden');
		card.classList.remove('hidden');
		card.classList.add('show');
	});
});
