// update_at: 20160816 edited by shinocchi
function onSubmitForm(e) {
  var itemResponses = e.response.getItemResponses();
  var str_answer = '';  // 回答結果の文字列
  var apply_name = '';  // 氏名
  var apply_mail = '';  // メールアドレス
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();
    if (question == '氏名'){
      apply_name = answer;
    }
    if (question == 'メールアドレス'){
      apply_mail = answer;
    }
    str_answer += (i + 1).toString() + '. ' + question + ': ' + answer + '\n';
  }

  // manmaメンバー向けメール設定
  var admin_mail = 'メールアドレスを入力';
  var admin_title = '';
  var admin_content = '以下の内容でフォームが送信されました。\n\n' + str_answer;

  // manmaメンバー向けメール送信
  GmailApp.sendEmail(admin_mail, admin_title, admin_content, {name: 'manmaシステム'});
}
