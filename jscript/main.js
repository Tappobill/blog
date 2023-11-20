function initSlide() {

    const elemSlideIn = document.getElementById("slide-in");
    const elemSlideOut = document.getElementById("slide-out");

    if (elemSlideIn === null || elemSlideOut === null) {
        return;
    }
    elemSlideIn.addEventListener("click", moveIn);

    elemSlideOut.addEventListener("click", moveOut);

    const slide = document.getElementById("slide");
    const body = document.getElementById("body");    

    function moveIn() {
        body.classList.add("no-scroll");
        slide.classList.add("left-1");
        setTimeout(function() {
            slide.classList.add("left")
        }, 1900)
    };

    function moveOut() {
        slide.classList.remove("left-1");
        slide.classList.remove("left");
        setTimeout(function () { body.classList.remove("no-scroll"); }, 1500);
    };

}



document.addEventListener("DOMContentLoaded", function () {
    initSlide();
    printPosts();
});


function printPosts() {

    const sectionPost = document.getElementById("section-posts");

    if (sectionPost === null) {
        return
    }

    for (let i = 0; i < posts.length; i++) {

        const post = printPost(posts[i]);

        sectionPost.appendChild(post);

    }

};

function printPost(data) {

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML =
        `
    <h5>
       ${data.title}
    </h5>
    <h6 class="mb-auto">${data.publishedAt}</h6>

    <p class="mb-auto">
       ${data.preview}
    </p>
    <div class="mb-auto">
       <span>${data.categories[0]}</span>
       <span>${data.categories[1]}</span>
    </div>
    <div class="df">
       <div class="hc"><i class="fa-regular fa-comment-dots mr"></i>3</div>
       <div class="hv"><a class:"viewmore" href="viewmore.html?id=${data.id}">View More</a></div>
    </div>

      `
    return post;
}



