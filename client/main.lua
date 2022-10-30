ESX = nil


Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end

	ESX.PlayerData = ESX.GetPlayerData()
end)


RegisterNetEvent('transfer_money:transfer_money_menu')
AddEventHandler('transfer_money:transfer_money_menu', function()
	local _source  = source
	local elements = {
		{label = "Dinero Limpio", value = 'money'},
		{label = "Dinero Sucio", uniform = 'black_money'},
	}

	ESX.UI.Menu.CloseAll()

	ESX.UI.Menu.Open('default', GetCurrentResourceName(), 'money_menu', {
		title    = "Dar dinero",
		align    = 'top-left',
		elements = elements
	}, function(data, menu)
		if data.current.value == 'money' then
			local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
			if closestPlayer ~= -1 and closestDistance <= 3.0 then
				ESX.UI.Menu.Open('dialog', GetCurrentResourceName(), 'menu_money',
				{
					title = ('Cantidad a pagar')
				},
				function(data, menu)
					local amount = tonumber(data.value)
					if amount <= 0 then
					ESX.ShowNotification('Cantidad invalida')
					else
					menu.CloseAll()
					TriggerServerEvent('transfer_money:transfer_money', closestPlayer, amount, _source)
					end
				end,
				function(data, menu)
					menu.close()
				end)
			else
				ESX.ShowNotification('No hay jugadores cerca')
			end
		elseif data.current.value == 'black_money' then
			local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
			if closestPlayer ~= -1 and closestDistance <= 3.0 then
				ESX.UI.Menu.Open('dialog', GetCurrentResourceName(), 'menu_black_money',
				{
					title = ('Cantidad a pagar')
				},
				function(data, menu)
					local amount = tonumber(data.value)
					if amount <= 0 then
					ESX.ShowNotification('Cantidad invalida')
					else
					menu.CloseAll()
					TriggerServerEvent('transfer_money:transfer_black_money', closestPlayer, amount, _source)
					end
				end,
				function(data, menu)
					menu.close()
				end)
			else
				ESX.ShowNotification('No hay jugadores cerca')
			end
		end
  	end, function(data, menu)
		menu.close()
	end)
end)