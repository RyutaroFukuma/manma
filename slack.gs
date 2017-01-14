function slack_submitForm(e){

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

  var token = '';
  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得
  var slack_message = '以下の内容でフォームが送信されました。\n\n' + str_answer;



  var options = {
    channelId: "#", //チャンネル名
    userName: "参加者登録", //投稿するbotの名前
    message: slack_message //投稿するメッセージ
  };



  slackApp.postMessage(options.channelId, options.message, {username: options.userName});
}
