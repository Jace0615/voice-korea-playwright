import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import {
  latency,
  email,
  password,
  survey_title,
  screenshot_path,
  longlatency,
  main_page,
} from "./constants";
import path from "path";

test.describe("Survey", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(main_page);
    await page.waitForTimeout(latency);
  });

  test("[SURVEY-scenario test] create-a-survey", async ({ page }) => {

    await page
    .getByPlaceholder('이메일').fill(email);
  await page.waitForTimeout(latency);
  await page.getByPlaceholder('비밀번호').fill(password);
  await page.screenshot({
    path: screenshot_path("account", "account-log-in", "1-fill-the-login-form"),
    fullPage: true,
  });
  await page
  .getByRole("button", { name:"로그인"})
  .click();
    await page.waitForTimeout(latency);
    await page.getByText("여론 조사").click();
    await page.waitForTimeout(latency);
    await page.getByText("조사 시작하기").click();
    await page.waitForTimeout(latency);
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div/div[2]/div[3]/select'  
    ).click({text:"경제"});
    await page.waitForTimeout(latency);

    // write a title
    await page.getByPlaceholder("제목을 입력해주세요").fill("국민연금에 대한 조사");
    await page.waitForTimeout(latency);

    // write a description
    await page.getByPlaceholder("내용을 입력해주세요").fill("국민연금에 대한 조사");
    await page.waitForTimeout(latency);

    // create a question_1
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[2]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[2]/div[2]/div[1]/input'
    ).fill("귀하는 국민연금이 국민에게 필요한 제도라고 생각하십니까?");
    await page.getByText("옵션 추가하기").click();
    await page.getByPlaceholder("옵션 1").fill("전혀 필요하지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").click();
    await page.getByPlaceholder("옵션 2").fill("필요하지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").click();
    await page.getByPlaceholder("옵션 3").fill("필요하다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").click();
    await page.getByPlaceholder("옵션 4").fill("매우 필요하다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").click();
    await page.getByPlaceholder("옵션 5").fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_2
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[3]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[3]/div[2]/div[1]/input'
    ).fill("향후 수급 연령이 되었을 때 국민연금을 받을 수 있다고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(1).click();
    await page.getByPlaceholder("옵션 1").nth(1).fill("전혀 그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(1).click();
    await page.getByPlaceholder("옵션 2").nth(1).fill("그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(1).click();
    await page.getByPlaceholder("옵션 3").nth(1).fill("그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(1).click();
    await page.getByPlaceholder("옵션 4").nth(1).fill("매우 그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(1).click();
    await page.getByPlaceholder("옵션 5").nth(1).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_3
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[4]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[4]/div[2]/div[1]/input'
    ).fill("예.적금 주식 등의 재테크보다 국민연금에 가입하는 것이 더 낫다고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(2).click();
    await page.getByPlaceholder("옵션 1").nth(2).fill("전혀 그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(2).click();
    await page.getByPlaceholder("옵션 2").nth(2).fill("그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(2).click();
    await page.getByPlaceholder("옵션 3").nth(2).fill("그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(2).click();
    await page.getByPlaceholder("옵션 4").nth(2).fill("매우 그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(2).click();
    await page.getByPlaceholder("옵션 5").nth(2).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_4
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[5]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[5]/div[2]/div[1]/input'
    ).fill("지난 1년 간 국민연금 개혁을 위한 정치권(정부, 국회)의 활동에 대해 어떻게 평가하십니까?");
    await page.getByText("옵션 추가하기").nth(3).click();
    await page.getByPlaceholder("옵션 1").nth(3).fill("매우 못하고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(3).click();
    await page.getByPlaceholder("옵션 2").nth(3).fill("대체로 못하고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(3).click();
    await page.getByPlaceholder("옵션 3").nth(3).fill("대체로 잘하고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(3).click();
    await page.getByPlaceholder("옵션 4").nth(3).fill("매우 잘하고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(3).click();
    await page.getByPlaceholder("옵션 5").nth(3).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_5
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[6]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[6]/div[2]/div[1]/input'
    ).fill("국민연금 제도는 현재 젊은층과 미래 세대에게 불리한 제도라는 의견에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(4).click();
    await page.getByPlaceholder("옵션 1").nth(4).fill("전혀 그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(4).click();
    await page.getByPlaceholder("옵션 2").nth(4).fill("그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(4).click();
    await page.getByPlaceholder("옵션 3").nth(4).fill("그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(4).click();
    await page.getByPlaceholder("옵션 4").nth(4).fill("매우 그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(4).click();
    await page.getByPlaceholder("옵션 5").nth(4).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_6
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[7]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[7]/div[2]/div[1]/input'
    ).fill("지금이라도 가능하다면 지금까지 낸 돈을 돌려받고 국민연금을 탈퇴하고 싶다고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(5).click();
    await page.getByPlaceholder("옵션 1").nth(5).fill("전혀 그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(5).click();
    await page.getByPlaceholder("옵션 2").nth(5).fill("그렇지 않다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(5).click();
    await page.getByPlaceholder("옵션 3").nth(5).fill("그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(5).click();
    await page.getByPlaceholder("옵션 4").nth(5).fill("매우 그렇다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(5).click();
    await page.getByPlaceholder("옵션 5").nth(5).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_7
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[8]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[8]/div[2]/div[1]/input'
    ).fill("소득이 불안정한 청년들을 국가가 지원(예: 첫 1개월 국민연금 보험료 국가가 지원)하여 만 18세부터 국민연금에 강제 가입시켜야 한다는 의견에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(6).click();
    await page.getByPlaceholder("옵션 1").nth(6).fill("전혀 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(6).click();
    await page.getByPlaceholder("옵션 2").nth(6).fill("대체로 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(6).click();
    await page.getByPlaceholder("옵션 3").nth(6).fill("대체로 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(6).click();
    await page.getByPlaceholder("옵션 4").nth(6).fill("매우 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(6).click();
    await page.getByPlaceholder("옵션 5").nth(6).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_8
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[9]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[9]/div[2]/div[1]/input'
    ).fill("국민연금을 개혁한다면 다음 항목 중 가장 먼저 시행해야 하는 항목은 무엇이라고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(7).click();
    await page.getByPlaceholder("옵션 1").nth(7).fill("국민연금 가입자에게 더 많은 보험료를 걷어야 한다(월보험료율 인상)");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(7).click();
    await page.getByPlaceholder("옵션 2").nth(7).fill("국민연금을 받는 사람에게 더 적은 금액의 연금을 지급해야 한다(소득대체율 인하)");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(7).click();
    await page.getByPlaceholder("옵션 3").nth(7).fill("국민연금을 현재(만 63세)보다 더 늦은 나이부터 받게해야 한다(수급개시연령 증가)");
    await page.waitForTimeout(latency);

    // create a question_9
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[10]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[10]/div[2]/div[1]/input'
    ).fill("국민연금을 개혁한다면 다음 항목 중 가장 먼저 시행해야 하는 항목은 무엇이라고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(8).click();
    await page.getByPlaceholder("옵션 1").nth(8).fill("현재 9%보다 더 많이 내고, 추후 연금 혜택을 더 받는 방향(소득대체율 인상)");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(8).click();
    await page.getByPlaceholder("옵션 2").nth(8).fill("현재 9%보다 조금 더 내고, 현재 수준의 연금 혜택을 유지하는 방향(소득대체율 유지)");
    await page.waitForTimeout(latency);

    // create a question_10
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[11]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[11]/div[2]/div[1]/input'
    ).fill("이미 지급하기로 약속한 연금액 중 현재 준비되어 있는 금액 대비 부족한 금액을 ‘미적립 부채’라고 합니다. 국민연금 개혁 논의를 위해 ‘미적립 부채’를 국민에게 공개하는 것에 대해 어떻게 생각하십니까?이미 지급하기로 약속한 연금액 중 현재 준비되어 있는 금액 대비 부족한 금액을 ‘미적립 부채’라고 합니다. 국민연금 개혁 논의를 위해 ‘미적립 부채’를 국민에게 공개하는 것에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(9).click();
    await page.getByPlaceholder("옵션 1").nth(9).fill("전혀 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(9).click();
    await page.getByPlaceholder("옵션 2").nth(9).fill("대체로 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(9).click();
    await page.getByPlaceholder("옵션 3").nth(8).fill("대체로 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(9).click();
    await page.getByPlaceholder("옵션 4").nth(7).fill("매우 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(9).click();
    await page.getByPlaceholder("옵션 5").nth(7).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_11
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[12]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[12]/div[2]/div[1]/input'
    ).fill("국민연금 기금이 소진되더라도 정부가 세금 등으로 연금 지급을 보장하는 ‘국가 지급 보장’ 법조항 추가(명문화)에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(10).click();
    await page.getByPlaceholder("옵션 1").nth(10).fill("전혀 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(10).click();
    await page.getByPlaceholder("옵션 2").nth(10).fill("대체로 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(10).click();
    await page.getByPlaceholder("옵션 3").nth(9).fill("대체로 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(10).click();
    await page.getByPlaceholder("옵션 4").nth(8).fill("매우 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(10).click();
    await page.getByPlaceholder("옵션 5").nth(8).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_12
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[13]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[13]/div[2]/div[1]/input'
    ).fill("국민연금 제도 개혁은 누가 책임을 지고 주도해야 한다 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(11).click();
    await page.getByPlaceholder("옵션 1").nth(11).fill("국회");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(11).click();
    await page.getByPlaceholder("옵션 2").nth(11).fill("대통령과 관련 부처");
    await page.waitForTimeout(latency);

    // create a question_13
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[14]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[14]/div[2]/div[1]/input'
    ).fill("국민연금 기금 운용에 관한 중요사항은 기금운용위원회에서 결정하고 있습니다. 기금운용위원회에 금융.투자 전문가들을 다수 위촉하여 운용 전반에 적극적으로 개입할 수 있게 해야 한다는 의견에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(12).click();
    await page.getByPlaceholder("옵션 1").nth(12).fill("전혀 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(12).click();
    await page.getByPlaceholder("옵션 2").nth(12).fill("대체로 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(12).click();
    await page.getByPlaceholder("옵션 3").nth(10).fill("대체로 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(12).click();
    await page.getByPlaceholder("옵션 4").nth(9).fill("매우 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(12).click();
    await page.getByPlaceholder("옵션 5").nth(9).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_14
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[15]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[15]/div[2]/div[1]/input'
    ).fill("국민연금 개혁을 위한 사회적 합의가 현재 우리 사회에서 어느 정도 이뤄지고 있다고 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(13).click();
    await page.getByPlaceholder("옵션 1").nth(13).fill("매우 부족하다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(13).click();
    await page.getByPlaceholder("옵션 2").nth(13).fill("부족하다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(13).click();
    await page.getByPlaceholder("옵션 3").nth(11).fill("다소 잘 이뤄지고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(13).click();
    await page.getByPlaceholder("옵션 4").nth(10).fill("잘 이뤄지고 있다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(13).click();
    await page.getByPlaceholder("옵션 5").nth(10).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    // create a question_15
    await page.getByText("새로운 질문을 추가해주세요.").click();
    await page.waitForTimeout(latency);
    await page.selectOption('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[16]/div[2]/div[1]/select'
    , '객관식(단일선택)');
    await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[3]/div[1]/div[16]/div[2]/div[1]/input'
    ).fill("국민연금 개혁 과정에서 국민들이 의사결정에 참여할 수 있도록 ‘공론화위원회’를 구성하는 것에 대해 어떻게 생각하십니까?");
    await page.getByText("옵션 추가하기").nth(14).click();
    await page.getByPlaceholder("옵션 1").nth(14).fill("전혀 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(14).click();
    await page.getByPlaceholder("옵션 2").nth(14).fill("대체로 동의하지 않는다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(14).click();
    await page.getByPlaceholder("옵션 3").nth(12).fill("대체로 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(14).click();
    await page.getByPlaceholder("옵션 4").nth(11).fill("매우 동의한다");
    await page.waitForTimeout(latency);
    await page.getByText("옵션 추가하기").nth(14).click();
    await page.getByPlaceholder("옵션 5").nth(11).fill("잘 모르겠다");
    await page.waitForTimeout(latency);

    await page.getByText("다음으로").click();
    await page.waitForTimeout(latency);

//Panel selection

//panel create_1
await page.getByText("패널 새로 만들기").click();
await page.waitForTimeout(latency);
await page.getByPlaceholder("패널명 입력").fill("18~29세/남성");
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[1]/div[2]/div/button'
).click();
await page.getByText('18~29세', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[2]/div[2]/div/button'
).click();
await page.getByText('남성', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[3]/div[2]/div/button'
).click();
await page.getByText('서울', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[4]/div[2]/div/button'
).click();
await page.getByText('2400만원 이하', {exact: true}).click();
await page.getByText("저장하기").click();
await page.waitForTimeout(latency);

//panel create_2
await page.getByText("패널 새로 만들기").click();
await page.waitForTimeout(latency);
await page.getByPlaceholder("패널명 입력").fill("18~29세/여성");
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[1]/div[2]/div/button'
).click();
await page.getByText('18~29세', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[2]/div[2]/div/button'
).click();
await page.getByText('여성', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[3]/div[2]/div/button'
).click();
await page.getByText('서울', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[4]/div[2]/div/button'
).click();
await page.getByText('2400만원 이하', {exact: true}).click();
await page.getByText("저장하기").click();
await page.waitForTimeout(latency);

//panel create_3
await page.getByText("패널 새로 만들기").click();
await page.waitForTimeout(latency);
await page.getByPlaceholder("패널명 입력").fill("30대/남성");
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[1]/div[2]/div/button'
).click();
await page.getByText('30대', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[2]/div[2]/div/button'
).click();
await page.getByText('남성', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[3]/div[2]/div/button'
).click();
await page.getByText('서울', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[4]/div[2]/div/button'
).click();
await page.getByText('2400만원 이하', {exact: true}).click();
await page.getByText("저장하기").click();
await page.waitForTimeout(latency);

//panel create_4
await page.getByText("패널 새로 만들기").click();
await page.waitForTimeout(latency);
await page.getByPlaceholder("패널명 입력").fill("30대/여성");
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[1]/div[2]/div/button'
).click();
await page.getByText('30대', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[2]/div[2]/div/button'
).click();
await page.getByText('여성', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[3]/div[2]/div/button'
).click();
await page.getByText('서울', {exact: true}).click();
await page.locator('xpath=//*[@id="create_panel"]/div/div[2]/div[4]/div[2]/div/button'
).click();
await page.getByText('2400만원 이하', {exact: true}).click();
await page.getByText("저장하기").click();
await page.waitForTimeout(latency);

//total panel count
await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[4]/div[2]/div[2]/div[1]/div[2]/input'
).fill("40");
await page.waitForTimeout(latency);

//set panel_1 count
await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[4]/div[2]/div[3]/div[2]/div[1]/div[2]/input'
).fill("10");

//set panel_2 count
await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[4]/div[2]/div[3]/div[2]/div[2]/div[2]/input'
).fill("10");

//set panel_3 count
await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[4]/div[2]/div[3]/div[2]/div[3]/div[2]/input'
).fill("10");

//set panel_4 count
await page.locator('xpath=//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/div/div/div[4]/div[2]/div[3]/div[2]/div[4]/div[2]/input'
).fill("10");

//create survey
await page.getByText("완료하기").click();
await page.waitForTimeout(latency);

  })
})