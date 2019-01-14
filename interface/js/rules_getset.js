Rule.prototype["asAssignmentRule"] = function() {
  var swtch = new Module.RuleSwitch();
  return swtch.castToAssignmentRule(this);
}