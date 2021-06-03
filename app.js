function product() {
    const prodtab = document.querySelector("#product-tab");
    prodtab.addEventListener("click", () => {
        const toggle = document.querySelector(".product-toggle");
        (toggle.style.visibility==="hidden")?(toggle.style.visibility="visible"):(toggle.style.visibility="hidden");
    })
}
product();