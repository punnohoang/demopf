document.getElementById("btnCall").addEventListener("click", async () => {

    const resultEl = document.getElementById("result");
    resultEl.innerHTML = "⏳ Đang gọi backend...";

    try {
        const res = await fetch("http://localhost:3000/api/hello");
        const data = await res.json();

        resultEl.innerHTML = `
            <strong>Backend trả về:</strong>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    } catch (err) {
        resultEl.innerHTML = "❌ Lỗi khi gọi API: " + err;
    }
});

