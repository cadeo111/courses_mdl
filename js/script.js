/**
 * Created by cadenkeese on 2/9/17.
 */

let dummyString = `Pickles can be mashed up with salted chicken breasts, also try jumbleing the paste with gold
            tequila.
                Mix each side of the onion with two and a half teaspoons of zucchini. Flavor half a kilo of walnut
        in three oz of cocktail sauce. Rub two and a half teaspoons of herring in one quarter cup of white
        wine.
            Shrimps can be garnished with sour okra, also try rinseing the casserole with strudel lassi.
            Chicken can be brushed with large ramen, also try rinseing the smoothie with maple syrup.
            Herring can be rubed with dried tofu, also try seasoning the curry with white wine.
            Escargot smoothie has to have a large, fresh walnut component. Remember: mashed broccoli tastes best
        when toasted in a basin whisked with radish sprouts. Cover one quarter cup of nachos in four oz of
        mayonnaise.
            Turkey can be seasoned with instant strawberries, also try blending the porridge with ice water.
            Ground beef can be jumbled with ripe white bread, also try decorateing the sauce with BBQ sauce.
            Everyone just loves the tartness of butter cheesecake tossd with rosemary. Instead of jumbling fresh
        orange juice with cauliflower, use four and a half teaspoons sweet chili sauce and five peaces
        mustard wok.
            Ghee can be rubed with divided avocado, also try mixing the salad with cocktail sauce.
            Try cooking okra loaf soaked with celery lassi. After crushing the watermelons, mix chickpeas,
            rhubarb and anchovy essence with it in a wok. Gooey, large pudding is best jumbled with quartered
            lime.`;
let englishText = `
	<p><u>MS Course Requirement (4 years)</u></p>- 4 Year-long courses taken grades 5-8<br><br>
	<p><u>US Graduation Requirement (4 years)</u></p>- 12 trimester courses taken, one per trimester in grades 9-12
	<br><br>
	The mission of Eastside Preparatory School's English Discipline is to empower students in 
	self-directed exploration and analysis of literature and writing. While in in the Middle School, 
	students learn to approach writing as a process while acquiring foundational skills in grammar 
	conventions and basic research techniques. Additionally, they examine and identify different 
	literary genres while learning how to read critically. In the Upper School, students continue 
	to build on these skills and processes and begin collegiate-level analysis of literature and 
	writing across disciplines. Eastside Prep students graduate prepared for academic writing and 
	thinking in every aspect of their future education.
`;


let gradeArray = ['5<sup>th</sup>-12<sup>th</sup>', 'Middle School', 'High School'];
let triArray = ['All Lengths', 'Trimester', 'Year', 'Seminar'];
let subjects = ['All', 'English', 'History/Social Sci.', 'Math', 'Science', 'Spanish', 'Arts', 'P.E.', 'Tech', 'Interdisciplinary', 'Seminar'];
let subjectInfo = ['', englishText, dummyString, dummyString, dummyString, dummyString, dummyString, dummyString, dummyString, dummyString, dummyString,]

$(function () {


    function listComponent(name, on, toAppend) {
        let nameMod = name.substr(0, 3);
        $(toAppend).append(
            $('<div>').addClass(`s-${nameMod} mdl-radio_container`).html(
                `
                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="${nameMod}">
                        <input type="radio" id="${nameMod}" class="mdl-radio__button" name="options" value="${nameMod}" ${(on) ? 'checked' : ''}>
                        <span class="mdl-radio__label">${name}</span>
                    </label>
                `)
        );
        componentHandler.upgradeElement(document.getElementById(nameMod));
    }


    function makeHtml(title, content, toAppend) {
        let div = $('<div>').addClass('ci-' + title.substr(0, 3)).html(`<h4 class="mdl-dialog__title">${title} @ EPS</h4>
        <div class="mdl-dialog__content">
            <p>
           ${content}
    </p>
    </div>`);
        console.log(div);
        div.appendTo(toAppend);
        div.hide();
    }

    for (i = 0; i < subjects.length; i++) {
        makeHtml(subjects[i], subjectInfo[i], '#subjectDialog .data');
    }


    for (let i = 0; i < subjects.length; i++) {
        (listComponent(subjects[i], (i === 1), 'div.list'));
    }


    $('input.grade-level').html(gradeArray[0]).on("change mousemove", function () {
        $('div.grade-level .title').html(gradeArray[$(this).val()]);
    });

    $('input.trimesters').html(triArray[0]).on("change mousemove", function () {
        $('div.trimesters .title').html(triArray[$(this).val()]);
    });

    let subDialog = document.getElementById('subjectDialog');

    $('.show-sub-dialog').click(function () {
        $(".ci-" + $(this).data('subject').substr(0, 3)).show();
        subDialog.showModal();
    });
    $('.close-sub-dialog').click(function () {
        subDialog.close();
    });

    let classDialog = document.getElementById('classDialog');

    $('.show-class-dialog').click(function () {
        console.log($(this).data('class-body'));
        $('.classDialog .title').html($(this).data('class-title'));
        $('.classDialog .content').html($(this).data('class-content'));
        classDialog.showModal();
    });
    $('.close-class-dialog').click(function () {
        classDialog.close();
    });


});
