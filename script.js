<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Book an Appointment | MT Tech Services</title>

<meta name="description"
content="Schedule an appointment with MT Tech Services.">

<link rel="stylesheet" href="style.css">

</head>

<body>

<header class="navbar">

<div class="container nav-container">

<a href="index.html" class="logo">

MT Tech Services

</a>

<nav>

<ul class="nav-links">

<li>

<a href="index.html">

Home

</a>

</li>

<li>

<a href="#booking">

Schedule

</a>

</li>

<li>

<a href="#contact">

Contact

</a>

</li>

<li>

<a href="booking.html"
class="nav-button">

Book Appointment

</a>

</li>

</ul>

<button class="menu-toggle">

☰

</button>

</nav>

</div>

</header>

<section class="hero">

<div class="hero-background"></div>

<div class="container hero-content">

<span class="hero-tag">

Appointment Scheduling

</span>

<h1>

Schedule Your Technology Appointment

</h1>

<p>

Book a convenient time to discuss your
technology questions and support needs.

</p>

<div class="hero-buttons">

<a href="#booking"
class="primary-btn">

Book Now

</a>

<a href="index.html"
class="secondary-btn">

Back Home

</a>

</div>

</div>

</section>

<section>

<div class="container">

<div class="section-title">

<span>

Simple Process

</span>

<h2>

What To Expect

</h2>

</div>

<div class="card-grid">

<div class="glass-card">

<h3>

Choose A Time

</h3>

<p>

Select an available appointment
that works for your schedule.

</p>

</div>

<div class="glass-card">

<h3>

Tell Us About Your Issue

</h3>

<p>

Provide a few details about
what you need help with.

</p>

</div>

<div class="glass-card">

<h3>

Prepare

</h3>

<p>

Have any relevant devices,
chargers,
or account information available.

</p>

</div>

<div class="glass-card">

<h3>

Meet

</h3>

<p>

Appointment details depend
on the service requested
and availability.

</p>

</div>

</div>

</div>

</section>

<section>

<div class="container">

<div class="glass-card">

<h2>

Helpful Things To Have Ready

</h2>

<br>

<ul>

<li>Your device.</li>

<li>Chargers or accessories.</li>

<li>Passwords if needed.</li>

<li>A list of questions.</li>

</ul>

</div>

</div>

</section>

<section id="booking">

<div class="container">

<div class="section-title">

<span>

Schedule

</span>

<h2>

Book Your Appointment

</h2>

</div>

<div class="glass-card">

<p style="text-align:center;margin-bottom:30px;">

Choose an available appointment below.
Availability depends on scheduling
and the type of assistance requested.

</p>

<div
id="my-cal-inline-mt-tech-services-appointment"
style="
width:100%;
min-height:850px;
overflow:auto;
border-radius:20px;
">
</div>

</div>

</div>

</section>

<section id="contact">

<div class="container">

<div class="section-title">

<span>

Contact

</span>

<h2>

Need Help Scheduling?

</h2>

</div>

<div class="glass-card">

<p>

<strong>

Text:

</strong>

<a href="sms:18049101150">

(804) 910-1150

</a>

(Text only)

</p>

<br>

<p>

<strong>

Email:

</strong>

<a href="mailto:mttechservices.sml@gmail.com">

mttechservices.sml@gmail.com

</a>

</p>

<br>

<p>

Text messaging is preferred
for scheduling questions.

</p>

</div>

</div>

</section>

<section>

<div class="container">

<div class="glass-card disclaimer">

<h2>

Important Information

</h2>

<br>

<p>

Appointment availability depends
on scheduling,
service area,
and the nature of the request.

</p>

<br>

<p>

Services and recommendations
depend on the specific issue.
Some situations may require
manufacturer support
or specialized repair services.

</p>

</div>

</div>

</section>

<footer>

<div class="container">

<h3>

MT Tech Services

</h3>

<br>

<p>

Serving Smith Mountain Lake
and surrounding communities.

</p>

<br>

<p>

Text:
<a href="sms:18049101150">

(804) 910-1150

</a>

(Text only)

</p>

<br>

<p>

Email:
<a href="mailto:mttechservices.sml@gmail.com">

mttechservices.sml@gmail.com

</a>

</p>

<br>

<a href="index.html">

Return Home

</a>

<p class="copyright">

© 2026 MT Tech Services

</p>

</div>

</footer>

<!-- CAL.COM -->

<script type="text/javascript">
(function (C, A, L) {
let p = function (a, ar) { a.q.push(ar); };
let d = C.document;

C.Cal = C.Cal || function () {
let cal = C.Cal;
let ar = arguments;

if (!cal.loaded) {
cal.ns = {};
cal.q = cal.q || [];
d.head.appendChild(
d.createElement("script")
).src = A;
cal.loaded = true;
}

if (ar[0] === L) {
const api = function () {
p(api, arguments);
};

const namespace = ar[1];
api.q = api.q || [];

if(typeof namespace === "string"){
cal.ns[namespace] =
cal.ns[namespace] || api;

p(cal.ns[namespace], ar);
p(cal,
["initNamespace", namespace]);

}else{
p(cal, ar);
}

return;
}

p(cal, ar);
};

})(

window,

"https://app.cal.com/embed/embed.js",

"init"

);

Cal(
"init",
"mt-tech-services-appointment",
{
origin:"https://app.cal.com"
}
);

Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;

Cal.ns["mt-tech-services-appointment"](
"inline",
{

elementOrSelector:
"#my-cal-inline-mt-tech-services-appointment",

config:{
layout:"month_view",
useSlotsViewOnSmallScreen:"true"
},

calLink:
"mt-tech-service/mt-tech-services-appointment"

}

);

Cal.ns["mt-tech-services-appointment"](
"ui",
{
hideEventTypeDetails:false,
layout:"month_view"
}
);

</script>

<script src="script.js"></script>

</body>
</html>
