resource "aws_cloudformation_stack_set_instance" "some_outputs" {
  stack_set_name = "some-outputs"
  depends_on = [
    aws_cloudformation_stack_set.stackset_map["some-outputs"],
    aws_cloudformation_stack.AWSCloudFormationStackSetAdministrationRole,
    aws_cloudformation_stack.AWSCloudFormationStackSetExecutionRole
  ]
}
