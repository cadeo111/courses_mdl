/**
 * Created by cadenkeese on 2/9/17.
 */
let list_component = `<div class="box selectors">
    <div class="mdl-radio_container">
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash1">
    <input checked class="mdl-radio__button" id="flash1" name="flash" type="radio" value="on">
    <span class="mdl-radio__label">Always on</span>
</label>
</div>
<div class="mdl-radio_container">
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash2">
    <input class="mdl-radio__button" id="flash2" name="flash" type="radio">
    <span class="mdl-radio__label">Always off</span>
</label>
</div>
<div class="mdl-radio_container">
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash3">
    <input class="mdl-radio__button" id="flash3" name="flash" type="radio">
    <span class="mdl-radio__label">Automatic</span>
    </label>
    </div>
    </div>`;

$('div.list').html(list_component);
