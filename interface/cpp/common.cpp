char* cstr_clone(const char* src) {
  size_t n = (strlen(src)+1)*sizeof(char);
  char* dst = (char*)malloc(n);
  memcpy(dst, src, n);
  return dst;
}
