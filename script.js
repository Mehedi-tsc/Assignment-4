let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCounting = document.getElementById('total-counting');
let interviewCounting = document.getElementById('interview-counting');
let rejectedCounting = document.getElementById('rejected-counting');
let jobCounting = document.getElementById('job-counting');

const mainPart = document.querySelector('main');
const cardContainer = document.getElementById('card-container');
const interviewOrRejected =document.getElementById('interview-rejected');
const filterPart = document.getElementById('filter-part');
jobCounting.innerText = cardContainer.children.length;

function calculateCounting() {
    totalCounting.innerText = cardContainer.children.length;
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
    if(id=='interview-btn' && interviewCounting.innerText>0){
        cardContainer.classList.add('hidden');
        filterPart.classList.remove('hidden');
        interviewOrRejected.classList.add('hidden');
        renderInterview();
        jobCounting.innerText = interviewList.length;
    }else if(id=='interview-btn'){
        cardContainer.classList.add('hidden');
        interviewOrRejected.classList.remove('hidden');
        filterPart.classList.add('hidden');
        // renderInterview();
        jobCounting.innerText = interviewList.length;
    }else if(id=='rejected-btn' && rejectedCounting.innerText>0){
        cardContainer.classList.add('hidden');
        filterPart.classList.remove('hidden');
        interviewOrRejected.classList.add('hidden');
        renderRejected();
        jobCounting.innerText = rejectedList.length;
    }else if(id=='rejected-btn'){
        cardContainer.classList.add('hidden');
        interviewOrRejected.classList.remove('hidden');
        filterPart.classList.add('hidden');
        // renderRejected();
         jobCounting.innerText = rejectedList.length;
    }else if(id=='all-btn'){
        cardContainer.classList.remove('hidden');
        interviewOrRejected.classList.add('hidden');
        filterPart.classList.add('hidden');
        jobCounting.innerText = cardContainer.children.length;
    }
    
};

mainPart.addEventListener('click', function(event){
    if(event.target.classList.contains('interview')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name');
        const position = parenNode.querySelector('.position');
        const locationTimeSalary =  parenNode.querySelector('.locationTimeSalary');
        const Status = parenNode.querySelector('.status');
        const description = parenNode.querySelector('.description');
        parenNode.querySelector('.status').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            position,
            locationTimeSalary,
            status: 'INTERVIEW',
            description
        };
        const existCompany = interviewList.find(item => item.companyName.innerText==cardInfo.companyName.innerText);
        if(!existCompany){
            interviewList.push(cardInfo);
        }
        rejectedList=rejectedList.filter(item=>item.companyName.innerText!=cardInfo.companyName.innerText);
        if(currentStatus==='rejected-btn' && rejectedCounting.innerText==1){
            renderRejected();
             interviewOrRejected.classList.remove('hidden');
        }else if(currentStatus==='rejected-btn'){
             renderRejected();
             jobCounting.innerText = interviewList.length;
        }
        calculateCounting();
        
         
    }
    else if(event.target.classList.contains('rejected')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name');
        const position = parenNode.querySelector('.position');
        const locationTimeSalary =  parenNode.querySelector('.locationTimeSalary');
        const Status = parenNode.querySelector('.status');
        const description = parenNode.querySelector('.description');
        parenNode.querySelector('.status').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            position,
            locationTimeSalary,
            status: 'REJECTED',
            description
        };

        const existCompany = rejectedList.find(item => item.companyName.innerText==cardInfo.companyName.innerText);
        if(!existCompany){
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item=> item.companyName.innerText!=cardInfo.companyName.innerText);
        if(currentStatus==='interview-btn'&& interviewCounting.innerText==1){
            renderInterview();
            interviewOrRejected.classList.remove('hidden');
        }else if(currentStatus==='interview-btn'){
            renderInterview();
        }
        calculateCounting();
    }
    else if(event.target.classList.contains('delete')){
        const parenNode = event.target.parentNode.parentNode;
        parenNode.remove();
        calculateCounting();
        jobCounting.innerText = cardContainer.children.length;
    }

});


function renderInterview(){
    filterPart.innerHTML = '';
    for( let interviewJob of interviewList){
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="p-6 bg-[#FFFFFF] border border-[#F1F2F4] rounded-lg lg:flex justify-between">
               <!-- Main part -->
                <div>
                        <h3 class="company-name text-xl font-semibold text-[#002C5C] mb-1">${interviewJob.companyName.innerText}</h3>
                        <p class="position text-[1rem] leading-5 text-[#64748B]">${interviewJob.position.innerText}</p>
                        <p class="locationTimeSalary my-[20px] text-[14px] leading-5 text-[#64748B]">${interviewJob.locationTimeSalary.innerText}</p>
                        <button class="status text-[14px] font-medium text-[#002C5C] bg-[#EEF4FF] px-3 py-2 rounded mb-2">INTERVIEW</button>
                        <p class="description text-[14px] text-[#323B49] mb-5">${interviewJob.description.innerText}</p>
                        <div class="">
                            <button class="interview text-[14px] text-[#10B981] font-semibold border border-[#10B981] rounded px-3 py-2">INTERVIEW</button>

                            <button class="rejected text-[14px] text-[#EF4444] font-semibold border border-[#EF4444] rounded px-3 py-2">REJECTED</button>
                        </div>
                </div>

                <!-- Delete part -->
                
                <div class="mt-3 lg:mt-0">
                     <img src="delete.png" alt="">
                </div>
            </div>
    `;
        filterPart.appendChild(div);
    }
    
}

function renderRejected(){
    filterPart.innerHTML = '';
    for( let rejectedJob of rejectedList){
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="p-6 bg-[#FFFFFF] border border-[#F1F2F4] rounded-lg lg:flex justify-between">
               <!-- Main part -->
                <div>
                        <h3 class="company-name text-xl font-semibold text-[#002C5C] mb-1">${rejectedJob.companyName.innerText}</h3>
                        <p class="position text-[1rem] leading-5 text-[#64748B]">${rejectedJob.position.innerText}</p>
                        <p class="locationTimeSalary my-[20px] text-[14px] leading-5 text-[#64748B]">${rejectedJob.locationTimeSalary.innerText}</p>
                        <button class="status text-[14px] font-medium text-[#002C5C] bg-[#EEF4FF] px-3 py-2 rounded mb-2">REJECTED</button>
                        <p class="description text-[14px] text-[#323B49] mb-5">${rejectedJob.description.innerText}</p>
                        <div class="">
                            <button class="interview text-[14px] text-[#10B981] font-semibold border border-[#10B981] rounded px-3 py-2">INTERVIEW</button>

                            <button class="rejected text-[14px] text-[#EF4444] font-semibold border border-[#EF4444] rounded px-3 py-2">REJECTED</button>
                        </div>
                </div>

                <!-- Delete part -->
                
                <div class="mt-3 lg:mt-0">
                     <img src="delete.png" alt="">
                </div>
            </div>
    `
        filterPart.appendChild(div);
    }
}