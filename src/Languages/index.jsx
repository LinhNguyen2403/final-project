const content={
    "FINAL PROJECT": {
        'vi':'DỰ ÁN CUỐI KHÓA',
        'kr':'최종 프로젝트'
    },
    "Calculator": {
        'vi':'Máy tính bỏ túi',
        'kr':'계산자'
    },
    "Chessboard": {
        'vi':'Bàn cờ vua',
        'kr':'체스 보드'
    },
    "ConvertRate": {
        'vi':'Chuyển đổi tiền tệ',
        'kr':'단위 변환기'
    },
    "Pomodoro": {
        'vi':'Đồng hồ Pomodoro',
        'kr':'포모도로 시계'
    }

}
function Language(text, lang){
    return (content[text] || {})[lang]||text
}
export default Language
