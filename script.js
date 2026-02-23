let interviewList = [];
let rejectedList = [];
let currentStatus = '';

let totalCounting = document.getElementById('total-counting');
let interviewCounting = document.getElementById('interview-counting');
let rejectedCounting = document.getElementById('rejected-counting');
let jobCounting = document.getElementById('job-counting');

const cardContainer = document.getElementById('card-container');
const interviewOrRejected =document.getElementById('interview-rejected');

function calculateCounting() {
    totalCounting.innerText = cardContainer.children.length;
    // jobCounting.innerText = cardContainer.children.length;
    interviewCounting.innerText = interviewList.length;
    rejectedCounting.innerText = rejectedList.length;
};
calculateCounting();

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');


function toggleStyle(id){
    // adding class
    allBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]', 'border', 'border-[#F1F2F4]');
    interviewBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]', 'border', 'border-[#F1F2F4]');
    rejectedBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]', 'border', 'border-[#F1F2F4]');
    
    // remove class
    allBtn.classList.remove('text-[#FFFFFF]', 'bg-[#3B82F6]', 'border', 'border-[#000000]');
    interviewBtn.classList.remove('text-[#FFFFFF]', 'bg-[#3B82F6]', 'border', 'border-[#000000]');
    rejectedBtn.classList.remove('text-[#FFFFFF]', 'bg-[#3B82F6]', 'border', 'border-[#000000]');

    // clicked btn
    const selected = document.getElementById(id);
    selected.classList.remove('text-[#64748B]', 'bg-[#FFFFFF]', 'border' ,'border-[#F1F2F4]');
    selected.classList.add('text-[#FFFFFF]', 'bg-[#3B82F6]', 'border', 'border-[#000000]');

    currentStatus = id;
    if(id=='interview-btn'){
        cardContainer.classList.add('hidden');
        interviewOrRejected.classList.remove('hidden');
    }else if(id=='rejected-btn'){
        cardContainer.classList.add('hidden');
        interviewOrRejected.classList.remove('hidden');
    }else if(id=='all-btn'){
        cardContainer.classList.remove('hidden');
        interviewOrRejected.classList.add('hidden');
    }
    
};

cardContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interview')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name');
        const Status = parenNode.querySelector('.status');
        parenNode.querySelector('.status').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            status: 'INTERVIEW'
        };
        const existCompany = interviewList.find(item => item.companyName==cardInfo.companyName);
        if(!existCompany){
            interviewList.push(cardInfo);
        }
        rejectedList=rejectedList.filter(item=>item.companyName!=cardInfo.companyName);
        calculateCounting();
    }
    else if(event.target.classList.contains('rejected')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name');
        const Status = parenNode.querySelector('.status');
        parenNode.querySelector('.status').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            status: 'REJECTED'
        };

        const existCompany = rejectedList.find(item => item.companyName==cardInfo.companyName);
        if(!existCompany){
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item=> item.companyName!=cardInfo.companyName);
        calculateCounting();
    }

    
});





