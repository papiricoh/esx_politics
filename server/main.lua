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

RegisterNetEvent('transfer_money:transfer_money')
AddEventHandler('transfer_money:transfer_money', function(closestPlayer, amount, source)
    local xPlayer = ESX.GetPlayerFromId(closestPlayer)
    local yPlayer = ESX.GetPlayerFromId(source)
    local accountmoney = yPlayer.getAccount('money')
    if accountmoney.money > 0 then
        yPlayer.removeAccountMoney('money', amount)
        xPlayer.addAccountMoney('money', amount)
    end
end)

RegisterNetEvent('transfer_money:transfer_black_money')
AddEventHandler('transfer_money:transfer_black_money', function(closestPlayer, amount, source)
    local xPlayer = ESX.GetPlayerFromId(closestPlayer)
    local yPlayer = ESX.GetPlayerFromId(source)
    local accountmoney = yPlayer.getAccount('money')
    if accountmoney.money > 0 then
        yPlayer.removeAccountMoney('black_money', amount)
        xPlayer.addAccountMoney('black_money', amount)
    end
end)


