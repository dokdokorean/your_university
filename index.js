const examDate = new Date('2024-11-15T00:00:00');

        function updateCountdown() {
            const currentDate = new Date();
            const daysRemaining = Math.ceil((examDate - currentDate) / (1000 * 60 * 60 * 24));

            if (daysRemaining === 0) {
                document.getElementById('countdown').textContent = 'D-day';
            } else {
                document.getElementById('countdown').textContent = `D-${daysRemaining}`;
            }
        }

        // 초기화 및 1초마다 업데이트
        updateCountdown();
        setInterval(updateCountdown, 1000);
        // 각 대학교에 대한 'submit' 이벤트 리스너를 저장할 변수들을 선언합니다.
let koreaSubmitListener, yonseiSubmitListener, seoulSubmitListener;

// 'korea' 대학을 선택했을 때 실행되는 함수
function handleKoreaSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    if (seoulSubmitListener) {
        document.getElementById('submit').removeEventListener('click', seoulSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    koreaSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('korea.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', koreaSubmitListener);
}

// 'yonsei' 대학을 선택했을 때 실행되는 함수
function handleYonseiSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (seoulSubmitListener) {
        document.getElementById('submit').removeEventListener('click', seoulSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    yonseiSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('yonsei.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', yonseiSubmitListener);
}

// 'seoul' 대학을 선택했을 때 실행되는 함수
function handleSeoulSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('snu.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handlesguSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('sgu.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handleskkuSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('skku.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handlehyuSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('hyu.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handlecauSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('cau.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handlekhuSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('khu.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handlehufsSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('hufs.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function handleusSelection() {
    // 이전에 추가된 'submit' 이벤트 리스너를 제거합니다.
    if (koreaSubmitListener) {
        document.getElementById('submit').removeEventListener('click', koreaSubmitListener);
    }
    if (yonseiSubmitListener) {
        document.getElementById('submit').removeEventListener('click', yonseiSubmitListener);
    }
    // 새로운 'submit' 이벤트 리스너를 추가합니다.
    seoulSubmitListener = function() {
        if(document.getElementById('name').value!='' && document.getElementById('dpt_1')!='' && document.getElementById('ad_1')!='' && document.getElementById('birth').value!='' && document.getElementById('birth').value.length==8)
        {
            localStorage.setItem('name',document.getElementById('name').value);
            localStorage.setItem('dpt',document.getElementById('recruitmentUnit').value);
            localStorage.setItem('app',document.getElementById('applicationType').value);
            localStorage.setItem('birth',document.getElementById('birth').value);
            window.open('us.html');
        }else {
            alert('정보를 정확히 입력하세요.')
        }  
    };
    document.getElementById('submit').addEventListener('click', seoulSubmitListener);
}
function changeUniversity() {
    const selectElement = document.getElementById('universitySelect');
            const imageDiv = document.getElementById('universityImage');
            switch (selectElement.value) {
                case 'korea':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">고려대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="korea.png" alt="고려대학교">';
                    document.getElementById('submit').style.backgroundColor='#8D2338'
                    document.getElementById('footer').style.backgroundColor='#8D2338'
                    handleKoreaSelection();
                    break;
                case 'yonsei':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">연세대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="yonsei.png" alt="연세대학교">';
                    document.getElementById('submit').style.backgroundColor='#004275'
                    document.getElementById('footer').style.backgroundColor='#004275'
                    handleYonseiSelection();
                    break;
                case 'seoul':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">서울대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="snu.png" alt="서울대학교">';
                    document.getElementById('submit').style.backgroundColor='#012F53'
                    document.getElementById('footer').style.backgroundColor='#012F53'
                    handleSeoulSelection();
                    break;
                case 'sgu':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">서강대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="sogang.png" alt="서강대학교">';
                    document.getElementById('submit').style.backgroundColor='#B3181C'
                    document.getElementById('footer').style.backgroundColor='#B3181C'
                    handlesguSelection();
                    break;
                case 'skku':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">성균관대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="skku.png" alt="성균관대학교">';
                    document.getElementById('submit').style.backgroundColor='#67A500'
                    document.getElementById('footer').style.backgroundColor='#67A500'
                    handleskkulSelection();
                    break;
                case 'hyu':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">한양대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="hanyang.png" alt="한양대학교">';
                    document.getElementById('submit').style.backgroundColor='#1F4783'
                    document.getElementById('footer').style.backgroundColor='#1F4783'
                    handlehyuSelection();
                    break;
                case 'cau':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">중앙대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="cau.png" alt="중앙대학교">';
                    document.getElementById('submit').style.backgroundColor='#005191'
                    document.getElementById('footer').style.backgroundColor='#005191'
                    handlecauSelection();
                    break;
                case 'khu':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">경희대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="gh.png" alt="경희대학교">';
                    document.getElementById('submit').style.backgroundColor='#94271E'
                    document.getElementById('footer').style.backgroundColor='#94271E'
                    handlekhuSelection();
                    break;
                case 'hufs':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">한국외국어대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="hfs.png" alt="한국외국어대학교">';
                    document.getElementById('submit').style.backgroundColor='#012F53'
                    document.getElementById('footer').style.backgroundColor='#012F53'
                    handlehufsSelection();
                    break;
                case 'us':
                    imageDiv.innerHTML = '<p id="img-ment1">나는</p><p id="img-ment2">서울시립대학교</p><p id="img-ment3">합격한다.</p><img class="univimg" src="us.png" alt="서울시립대학교">';
                    document.getElementById('submit').style.backgroundColor='#034DA3'
                    document.getElementById('footer').style.backgroundColor='#034DA3'
                    handleusSelection();
                    break;
                default:
                    imageDiv.innerHTML = '';
                    break;
            }
            // 사용자가 선택한 대학교에 따라 이미지 변경
        
        }
            

        