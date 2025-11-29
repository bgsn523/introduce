// options.js
document.addEventListener('DOMContentLoaded', () => {
    // 이미지 버튼들 (디스코드, 이메일, 텔레그램)
    const imageBtns = document.querySelectorAll('.image-btn');

    // Discord
    imageBtns[0].addEventListener('click', () => {
        window.open('https://discord.com/users/1320204664246894625', '_blank');
    });

    // Email 복사 + 툴팁
    imageBtns[1].addEventListener('click', () => {
        navigator.clipboard.writeText('bgsn1@proton.me').then(() => {
            showTooltip(imageBtns[1], 'E-mail address copied');
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    });

    // Telegram
    imageBtns[2].addEventListener('click', () => {
        window.open('https://t.me/bgsn_1', '_blank');
    });

    // 새로 추가: 텍스트 버튼들
    const shopButton = document.getElementById('frostCd');        // "최저가 종합 상점 방문하기"
    const historyButton = document.getElementById('SetCooldowns'); // "Bgsn1의 거래내역 보러가기"

    if (shopButton) {
        shopButton.addEventListener('click', () => {
            window.open('https://lumary-solution.sellhub.cx/', '_blank');
        });
    }

    if (historyButton) {
        historyButton.addEventListener('click', () => {
            window.open('https://instagram.com/bgsn5_23', '_blank');
        });
    }

    // 툴팁 함수 (이메일 복사 시 사용)
    function showTooltip(button, message) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = message;
        document.body.appendChild(tooltip);

        const btnRect = button.getBoundingClientRect();
        const tipRect = tooltip.getBoundingClientRect();

        tooltip.style.left = `${btnRect.left + (btnRect.width / 2) - (tipRect.width / 2) + window.scrollX}px`;
        tooltip.style.top  = `${btnRect.top - tipRect.height - 10 + window.scrollY}px`;
        tooltip.style.opacity = '1';

        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }, 2000);
    }
});