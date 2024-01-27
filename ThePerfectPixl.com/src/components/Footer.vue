<template>
    <div class="footer">
        <span class="text" id="foot_text">Contact me at <a href="mailto:kylelmars@gmail.com">kylelmars@gmail.com</a>.</span>
        <button class="link" id="top">To Top</button>
    </div>
</template>

<style scoped>
.footer {
	background-color: #f6f6f6;
	height: auto;
	padding: 1.5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2), 0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
#foot_text {font-size: 1.1vw;}
@media screen and (min-width: 1600px) {#foot_text {font-size: .8vw;}}
@media screen and (max-width: 768px) {#foot_text {font-size: 1.4vw;}}
@media screen and (max-width: 486px) {#foot_text {font-size: 2vw;}}
@media screen and (max-width: 414px) {#foot_text {font-size: 2.3vw;}}
</style>
