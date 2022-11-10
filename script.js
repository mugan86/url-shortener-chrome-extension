document.addEventListener('DOMContentLoaded', function () {
    document
        .getElementById('genShortUrl')
        .addEventListener('click', async function () {
            const dataInput = document.getElementById('url').value;
            fetch(
                'https://api.allorigins.win/raw?url=' +
                'https://short-link-api.vercel.app/?query=' +
                dataInput
            )
                .then((response) => response.json())
                .then((json) => {
                    document.getElementById('result').value = json['da.gd'];
                });
        });

    document
        .getElementById('copyShortUrl')
        .addEventListener('click', function () {
            const copyText = document.getElementById("result");
            copyText.select();
            copyText.setSelectionRange(0, 999);
            document.execCommand("copy");
        });
});