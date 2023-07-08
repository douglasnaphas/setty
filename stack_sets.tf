locals {
  stacksets = {
    "some-outputs" = {
      description  = "Some outputs."
      capabilities = []
    }
  }
}

resource "aws_cloudformation_stack_set" "stackset_map" {
  for_each                = local.stacksets
  name                    = each.key
  description             = each.value.description
  permission_model        = "SELF_MANAGED"
  template_body           = file(join("", ["cfn_templates/", replace(each.key, "-", "_"), ".json"]))
  capabilities            = each.value.capabilities
  administration_role_arn = join("", ["arn:aws:iam::", data.aws_caller_identity.current.account_id, ":role/AWSCloudFormationStackSetAdministrationRole"])
  parameters = {
    "Param1" = "Param1DefaultValue",
    "Param2" = "Param2DefaultValue"
  }
  lifecycle {
    ignore_changes = [
      administration_role_arn
    ]
  }
  depends_on = [
    aws_cloudformation_stack.AWSCloudFormationStackSetAdministrationRole,
    aws_cloudformation_stack.AWSCloudFormationStackSetExecutionRole
  ]
}
