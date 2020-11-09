var env = false;
var scope = false;
var code = false;

var files = {
    'media' : {
        'maze' : [      'https://drive.google.com/file/d/1OhaOzOoGh2P1QDIdBbQ6omrqclwGFkCr/view',
                        'https://drive.google.com/file/d/1j-bjtiahJralQYRk7KQYchGu5MWQV0S1/view',
                        'https://drive.google.com/file/d/1pSm1_JhTuURCAXAfz3sHUjD25vWCrYrX/view'],
        'xander enterprise' : [
            'https://drive.google.com/file/d/1JkKuxOABmUnwqs_AlsAbRMwt5vTCbYyu/view',
            'https://drive.google.com/file/d/1eNJZzmtDNYuYBgxPtYHADsGUyjs1NRHj/view'],
        'jaspersen family' : [ 'https://drive.google.com/file/d/1rO9-NHtGAjeoLchy36l5l1bQQzSiks2s/view',
                            'https://drive.google.com/file/d/1knrq2UrZCxm-6v7WRWGU1lUmAKH_QQAN/view',
                            'https://drive.google.com/file/d/1cibsjsITJpyjnnbJFQ-gKlIE9pQgU-wQ/view',
                            'https://drive.google.com/file/d/1yEqhRGVNhKSgrhwzf9dSsG4tJwEiMeUM/view'],
        'volkov group' : [    'https://drive.google.com/file/d/1Jz4wav5HjkD5JiW00jypk_eZyqFWXchQ/view',
                        'https://drive.google.com/file/d/1Bsiue5w2Mldc5hZiaPy3Q2pAzW68TWG5/view',
                        'https://drive.google.com/file/d/1yz8_ZyuyWYAFvaCOxnzK1RcN15BftE3T/view',
                        'https://drive.google.com/file/d/1LqHZ6YjOiHPajnJgqst7pAwPOKPUWIXl/view',
                        'https://drive.google.com/file/d/1sCqq5n09yLaoAKxlQzbIxUkvqGBtKyq9/view',
                        'https://drive.google.com/file/d/1YIAaKVZnZL69c_m-ddAFfHOWQQ1YZDWP/view',
                        'https://drive.google.com/file/d/1WVKPjNsemDmKWl4x-SyORk_GJjoAxOms/view']
    }, 
    'finance' : {
        'maze' : [      'https://drive.google.com/file/d/1yfSjdVYrmS3EmuLUrc7VrX2C0Kmd4gi3/view',
                        'https://drive.google.com/file/d/1ciKzQCojPv10URSbMvPT-1N1Uy_uy_M9/view'],
        'xander enterprise' : [    'https://drive.google.com/file/d/1pcY-lGH--NjbjnF3AS0NuI97LubijfxU/view'],
        'jaspersen family' : [ 'https://drive.google.com/file/d/1OxC5ahJvT90VG_k_uFFRRih0cX7LxBHe/view'],
        'volkov group' : [    'https://drive.google.com/file/d/1PsWegdbTzHezthr6BOrzGwCHlo_nVJGc/view',
                        'https://drive.google.com/file/d/1KT_TK14fwyB11IbgJFo9gHDzCN4ji6Rr/view',
                        'https://drive.google.com/file/d/1LbHVVXjWL4Sgf7rAhD9AHfevm2yuF6w4/view',
                        'https://drive.google.com/file/d/1zXUV9nu0XAV-vvBZc6L7Pjdu8blXXy9N/view']
    },
    'security' : {
        'maze' : [      'https://drive.google.com/file/d/1okuPD2zwKB2AsMQ4t6uw6TRCW6VKyRi2/view',
                        'https://drive.google.com/file/d/10JL0Gf5X7F9xHtHhWFw7mUxeBemESx3W/view' ],
        'xander enterprise' : [    'https://drive.google.com/file/d/1qlWrk8QtWlwbw_oyiMP01oF-1oHLubSO/view',
                        'https://drive.google.com/file/d/1FgdZRDwxN000l3hRZGL188FP_eOtvZmc/view'],
        'jaspersen family' : [ 'https://drive.google.com/file/d/1IBBypQ9_h7Dbi-nmP1ozgU3xIRAleJTz/view',
                        'https://drive.google.com/file/d/1It_IhZGWFEhCwHSuG-cyO_xZh93EZD6D/view'],
        'volkov group' : [    'https://drive.google.com/file/d/1v3U6J0Y0V9Rj8SznK1NhbNTJITFtnrmi/view']
    }
}

$("a.reload").on("click", function(e){
    e.preventDefault();
    e.stopImmediatePropagation()
    location.reload()
});
$("#fail_div, #tie_div").on("click", "a.reload", function(e){
    e.preventDefault();
    e.stopImmediatePropagation()
    location.reload()
});

$("#startGame").on("click", function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    $(".error-div").addClass("hidden")
    $("input[type=radio]").closest("div").removeClass('is-invalid')
    $("select").removeClass('is-invalid')
    env = ($("input[type=radio]:checked").val()).toLowerCase();
   // console.log(env)
    scope = ($("select").val()).toLowerCase();
    //console.log(scope)
    code = ($("input[type=text]").val()).toLowerCase();
    //console.log(code)
    //constructLink()
    if (env && scope){
        $("#form_layer").addClass("hidden");
        $("#game_layer").removeClass("hidden");
    }
    else {
        if (!env) {
            $("input[type=radio]").closest("div").addClass('is-invalid')
        }
        if (!scope) {
            $("select").addClass('is-invalid')
        }
        $(".error-div").removeClass("hidden")
        return
    }
    

})