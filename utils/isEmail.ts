export default (email: string) => {
  let re: RegExp = /\S+@\S+\.\S+/;
  return re.test(email);

}
