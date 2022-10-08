const required = (value: any, name?: String) => {
  if (!value) {
    throw new Error(`Campo ${name ? name : "obrigatório"} não preenchido`);
  }
};

export { required };
