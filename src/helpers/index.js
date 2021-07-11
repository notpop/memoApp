import { format } from 'date-fns';

export function dateToString(date) {
  if ( ! date) {
    return '';
  }

  return format(date, 'yyyy年MM月dd日 HH時mm分ss秒');
}

export function translateErrors(code) {
  const error = { title: 'エラー', description: '時間を置いてお試しください' };

  if ('auth/invalid-email' === code) {
    error.description = 'メールアドレスが不正です。';
  }
  else if ('auth/user-disabled' === code) {
    error.description = 'アカウントが無効です。';
  }
  else if ('auth/user-not-found' === code) {
    error.description = 'ユーザーが見つかりませんでした。';
  }
  else if ('auth/wrong-password' === code) {
    error.description = 'パスワードが間違っています。';
  }
  else if ('auth/email-already-in-use' === code) {
    error.description = 'メールアドレスが既に使用されています。';
  }
  else if ('auth/operation-not-allowed' === code) {
    error.description = '開発者にお問い合わせください。';
  }
  else if ('auth/weak-password' === code) {
    error.description = 'パスワードが簡単過ぎます。';
  }

  return error;
}
